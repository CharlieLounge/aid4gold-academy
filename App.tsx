import React, { useState, useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';
import { questions } from './data/questions';
import { Category, Question, TestMode } from './types';
import { 
  IconCheck, IconX, IconMoon, IconSun, IconBook, IconAward, 
  IconChart, IconArrowRight, IconRefresh, IconHome, IconBookmark,
  IconSettings, IconInfo
} from './components/IconComponents';

// --- ASSETS ---
const LOGO_LIGHT = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69418ecd75b607ccd02bfe07.png";
const LOGO_DARK = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69418ecaca72984d2e3dc14f.png";
const FLAG_CZ = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69406d9bb4f4204c1e6cdf88.png";
const FLAG_SK = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69406d9bca72982763169215.png";

// --- TRANSLATIONS ---

const translations = {
  cz: {
    title: "FireGOLD Academy",
    subtitle: "Váš průvodce k úspěšné certifikaci",
    training: "Trénink",
    selectCategories: "Vyberte kategorie:",
    savedQuestions: "Uložené otázky",
    startSelected: "Spustit trénink vybraných",
    startFull: "Kompletní cvičný test (vše)",
    stats: "Vaše statistiky",
    finishedTests: "Dokončených testů",
    successRate: "Celková úspěšnost",
    trend: "Vývoj úspěšnosti (posledních 20 testů)",
    question: "Otázka",
    finishTest: "Dokončit test",
    nextQuestion: "Další otázka",
    explanation: "Vysvětlení:",
    congrats: "Gratulujeme!",
    trainingNeeded: "Ještě to chce trénink",
    ready: "Jste připraveni na certifikaci.",
    notReady: "Pro splnění potřebujete alespoň 85%.",
    correct: "Správně",
    wrong: "Špatně",
    tryAgain: "Zkusit znovu",
    backToMenu: "Zpět do menu",
    noData: "Zatím žádná data",
    certification: "Certifikace",
    saveQuestion: "Uložit otázku",
    removeQuestion: "Odebrat z uložených",
    checkAnswer: "Zkontrolovat odpověď",
    multiChoiceHint: "Otázka může mít více správných odpovědí.",
    selectAnswers: "Vyberte správné možnosti",
    resultCorrect: "Správná odpověď (+1 bod)",
    resultWrong: "Chybná odpověď (0 bodů)",
    correctAnswersList: "Všechny správné odpovědi:"
  },
  sk: {
    title: "FireGOLD Academy",
    subtitle: "Váš sprievodca k úspešnej certifikácii",
    training: "Tréning",
    selectCategories: "Vyberte kategórie:",
    savedQuestions: "Uložené otázky",
    startSelected: "Spustiť tréning vybraných",
    startFull: "Kompletný cvičný test (všetko)",
    stats: "Vaše štatistiky",
    finishedTests: "Dokončených testov",
    successRate: "Celková úspešnosť",
    trend: "Vývoj úspešnosti (posledných 20 testov)",
    question: "Otázka",
    finishTest: "Dokončiť test",
    nextQuestion: "Ďalšia otázka",
    explanation: "Vysvetlenie:",
    congrats: "Gratulujeme!",
    trainingNeeded: "Ešte to chce tréning",
    ready: "Ste pripravení na certifikáciu.",
    notReady: "Na splnenie potrebujete aspoň 85%.",
    correct: "Správne",
    wrong: "Nesprávne",
    tryAgain: "Skúsiť znova",
    backToMenu: "Späť do menu",
    noData: "Zatiaľ žiadne dáta",
    certification: "Certifikácia",
    saveQuestion: "Uložiť otázku",
    removeQuestion: "Odobrať z uložených",
    checkAnswer: "Skontrolovať odpoveď",
    multiChoiceHint: "Otázka môže mať viac správnych odpovedí.",
    selectAnswers: "Vyberte správne možnosti",
    resultCorrect: "Správna odpoveď (+1 bod)",
    resultWrong: "Chybná odpoveď (0 bodov)",
    correctAnswersList: "Všetky správne odpovede:"
  }
};

const categoryTranslations: Record<string, Record<Category, string>> = {
  cz: {
    [Category.GOLD_MARKET]: "Obecné znalosti o zlatě a trhu",
    [Category.PRODUCTS]: "Produkty a procesy (iiplan)",
    [Category.FEES_COSTS]: "Poplatky a náklady",
    [Category.COMMISSIONS]: "Provize a kariéra",
    [Category.LEGAL_TAX]: "Legislativa, daně a AML",
    [Category.ETHICS_COMPANY]: "O společnosti a etika"
  },
  sk: {
    [Category.GOLD_MARKET]: "Všeobecné znalosti o zlate a trhu",
    [Category.PRODUCTS]: "Produkty a procesy (iiplan)",
    [Category.FEES_COSTS]: "Poplatky a náklady",
    [Category.COMMISSIONS]: "Provízie a kariéra",
    [Category.LEGAL_TAX]: "Legislatíva, dane a AML",
    [Category.ETHICS_COMPANY]: "O spoločnosti a etika"
  }
};

// --- COMPONENTS ---

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }> = ({ 
  children, variant = 'primary', className = '', ...props 
}) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white shadow-lg shadow-yellow-500/30",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const ProgressChart = ({ data, labels }: { data: number[], labels: { noData: string, cert: string } }) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-[150px] flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl">
        {labels.noData}
      </div>
    );
  }

  const certLevel = 100 - 85;
  
  // Use at least 10 slots to calculate width to prevent giant bars when data is low
  const minSlots = 10;
  const effectiveCount = Math.max(data.length, minSlots);
  
  return (
    <div className="w-full h-[150px] mt-6 relative">
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="w-full h-full overflow-visible"
      >
        {/* Background Grid Lines */}
        <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="100" stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" strokeWidth="0.5" />

        {/* 85% Certification Line */}
        <line 
          x1="0" 
          y1={certLevel} 
          x2="100" 
          y2={certLevel} 
          className="text-green-500 dark:text-green-400 opacity-60" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          strokeDasharray="4 2" 
        />
        
        {/* Bars */}
        {data.map((score, index) => {
          // Logic: Calculate width based on effectiveCount (min 10) so bars stay reasonable size
          const slotWidth = 100 / effectiveCount;
          const gap = slotWidth * 0.1; // Reduced gap (10% of slot instead of 20%)
          const barWidth = slotWidth - gap;
          const x = index * slotWidth + (gap / 2);
          const y = 100 - score;
          
          const isPassing = score >= 85;

          return (
            <g key={index}>
              <rect 
                x={x} 
                y={y} 
                width={barWidth} 
                height={score} 
                rx="1"
                className={`${isPassing ? 'fill-green-500 dark:fill-green-400' : 'fill-yellow-500'} transition-all duration-300 hover:opacity-80`}
              >
                <title>{score}%</title>
              </rect>
            </g>
          );
        })}
      </svg>
      
      <div className="absolute top-[15%] right-0 transform translate-x-2 -translate-y-1/2 flex items-center pointer-events-none">
        <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1 rounded backdrop-blur-sm">85% {labels.cert}</span>
      </div>
    </div>
  );
};

// --- LOGIC HELPERS ---

// Helper to determine correctness - ALWAYS STRICT (Hard mode logic)
const isCorrectAnswer = (userSelection: number[], correctIndices: number[]): boolean => {
  // Strict: Must match exactly (all correct must be selected, no extra)
  return userSelection.length === correctIndices.length && 
         userSelection.every(val => correctIndices.includes(val));
};

// --- APP COMPONENT ---

function App() {
  const { theme, toggleTheme } = useTheme();
  
  // Language State
  const [lang, setLang] = useState<'cz' | 'sk'>(() => {
    const saved = localStorage.getItem('firegold_lang');
    return (saved as 'cz' | 'sk') || 'cz';
  });

  // Track which mode is currently running to allow "Try Again" to work correctly
  const [currentTestMode, setCurrentTestMode] = useState<TestMode | 'saved'>('selected');

  useEffect(() => {
    localStorage.setItem('firegold_lang', lang);
  }, [lang]);

  const t = translations[lang];

  const getQText = (q: Question) => lang === 'sk' && q.text_sk ? q.text_sk : q.text;
  const getQOptions = (q: Question) => lang === 'sk' && q.options_sk ? q.options_sk : q.options;
  const getQExplanation = (q: Question) => lang === 'sk' && q.explanation_sk ? q.explanation_sk : q.explanation;

  // State
  const [view, setView] = useState<'menu' | 'test' | 'results'>('menu');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // answers stores the submitted answers. Each element is an array of selected indices or null if not answered yet.
  const [answers, setAnswers] = useState<(number[] | null)[]>([]);
  
  // currentSelection stores the user's currently selected indices for the current question before submission
  const [currentSelection, setCurrentSelection] = useState<number[]>([]);
  
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  
  const [savedQuestionIds, setSavedQuestionIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('firegold_saved_questions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('firegold_saved_questions', JSON.stringify(savedQuestionIds));
  }, [savedQuestionIds]);

  interface AppStats {
    totalTests: number;
    totalQuestions: number;
    totalCorrect: number;
    history: number[];
  }

  const [stats, setStats] = useState<AppStats>(() => {
    const saved = localStorage.getItem('firegold_stats');
    const parsed = saved ? JSON.parse(saved) : {};
    return {
      totalTests: parsed.totalTests || 0,
      totalQuestions: parsed.totalQuestions || 0,
      totalCorrect: parsed.totalCorrect || 0,
      history: parsed.history || []
    };
  });

  const categories = Object.values(Category);

  const startTest = (mode: TestMode | 'saved') => {
    // Save the mode so "Try Again" works correctly
    setCurrentTestMode(mode);

    let filteredQuestions: Question[] = [];
    
    if (mode === 'full') {
      filteredQuestions = [...questions];
    } else if (mode === 'single' || mode === 'selected') {
      filteredQuestions = questions.filter(q => selectedCategories.includes(q.category));
    } else if (mode === 'saved') {
      filteredQuestions = questions.filter(q => savedQuestionIds.includes(q.id));
    }

    if (filteredQuestions.length === 0) return;

    filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

    setActiveQuestions(filteredQuestions);
    setAnswers(new Array(filteredQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setCurrentSelection([]);
    setShowExplanation(false);
    setView('test');
  };

  const handleOptionClick = (optionIndex: number) => {
    // If already submitted, do nothing
    if (answers[currentQuestionIndex] !== null) return;

    setCurrentSelection(prev => {
      if (prev.includes(optionIndex)) {
        return prev.filter(i => i !== optionIndex);
      } else {
        return [...prev, optionIndex];
      }
    });
  };

  const submitAnswer = () => {
    if (answers[currentQuestionIndex] !== null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = currentSelection;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const toggleSavedQuestion = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSavedQuestionIds(prev => 
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    );
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentSelection([]);
      setShowExplanation(false);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    const correctCount = answers.reduce((acc, ans, idx) => {
      if (!ans) return acc;
      const question = activeQuestions[idx];
      const correct = isCorrectAnswer(ans, question.correctAnswerIndices);
      return (acc || 0) + (correct ? 1 : 0);
    }, 0) || 0;

    const percentage = Math.round((correctCount / activeQuestions.length) * 100);

    const newStats: AppStats = {
      totalTests: stats.totalTests + 1,
      totalQuestions: stats.totalQuestions + activeQuestions.length,
      totalCorrect: stats.totalCorrect + correctCount,
      history: [...stats.history, percentage].slice(-20)
    };
    
    setStats(newStats);
    localStorage.setItem('firegold_stats', JSON.stringify(newStats));
    setView('results');
  };

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  // --- VIEWS ---

  const renderMenu = () => (
    // Changed max-w to 7xl, added flex centering and min-height logic to avoid scroll on desktop
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col justify-center min-h-[calc(100vh-80px)]">
      <div className="text-center mb-6 animate-fade-in-down flex flex-col items-center">
        <img 
          src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} 
          alt="FireGOLD Academy" 
          className="h-40 w-auto object-contain mb-4" 
        />
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <IconBook /> {t.training}
          </h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.selectCategories}</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    selectedCategories.includes(cat)
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {categoryTranslations[lang][cat]}
                </button>
              ))}
            </div>
            
            {savedQuestionIds.length > 0 && (
              <div className="pt-2 border-t border-gray-100 dark:border-slate-700 mt-4">
                <button
                  onClick={() => startTest('saved')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-yellow-500/50 bg-yellow-50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <IconBookmark filled /> {t.savedQuestions}
                  </span>
                  <span className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 text-xs px-2 py-1 rounded-full">
                    {savedQuestionIds.length}
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => startTest('selected')} 
              disabled={selectedCategories.length === 0}
              className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.startSelected}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => { setSelectedCategories(categories); startTest('full'); }}
              className="w-full"
            >
              {t.startFull}
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <IconChart /> {t.stats}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-center mb-4">
            <div className="p-4 bg-yellow-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.totalTests}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.finishedTests}</div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.totalQuestions > 0 
                  ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) 
                  : 0}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.successRate}</div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-end">
             <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 pl-1">{t.trend}</div>
             <ProgressChart 
               data={stats.history} 
               labels={{ noData: t.noData, cert: t.certification }} 
             />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTest = () => {
    const question = activeQuestions[currentQuestionIndex];
    const submittedAnswer = answers[currentQuestionIndex];
    const isSubmitted = submittedAnswer !== null;
    const isSaved = savedQuestionIds.includes(question.id);
    
    // Determine active selection (either from history if submitted, or current toggle state)
    const activeSelection = isSubmitted ? submittedAnswer : currentSelection;

    // Scoring logic for display
    const isQuestionCorrect = isSubmitted && isCorrectAnswer(activeSelection, question.correctAnswerIndices);

    // Localized Content
    const qText = getQText(question);
    const qOptions = getQOptions(question);
    const qExplanation = getQExplanation(question);

    return (
      <div className="max-w-3xl mx-auto p-4 md:p-6 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button variant="secondary" onClick={() => setView('menu')} className="!px-3">
            <IconHome />
          </Button>
          <div className="flex-1 mx-4">
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
              <span>{t.question} {currentQuestionIndex + 1} / {activeQuestions.length}</span>
              <span>{Math.round(((currentQuestionIndex) / activeQuestions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex) / activeQuestions.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-xs px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 hidden md:block">
            {categoryTranslations[lang][question.category]}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-10 flex-1 relative">
          
          <div className="flex justify-between items-start gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white leading-relaxed">
              {qText}
            </h3>
            <button 
              onClick={(e) => toggleSavedQuestion(e, question.id)}
              className={`p-2 rounded-full transition-colors ${
                isSaved 
                  ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' 
                  : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
              title={isSaved ? t.removeQuestion : t.saveQuestion}
            >
              <IconBookmark filled={isSaved} />
            </button>
          </div>

          <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 flex items-center gap-3">
             <div className="text-blue-500 dark:text-blue-400">
               <IconInfo />
             </div>
             <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  {t.multiChoiceHint}
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                   {t.selectAnswers}
                </p>
             </div>
          </div>

          <div className="space-y-4">
            {qOptions.map((option, idx) => {
              const isSelected = activeSelection.includes(idx);
              const isCorrectOption = question.correctAnswerIndices.includes(idx);
              
              let buttonStyle = "border-gray-200 dark:border-slate-600 hover:border-yellow-500 dark:hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-slate-700";
              
              if (isSubmitted) {
                if (isSelected && isCorrectOption) {
                  // Correctly selected
                  buttonStyle = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200";
                } else if (isSelected && !isCorrectOption) {
                  // Incorrectly selected
                  buttonStyle = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200";
                } else if (!isSelected && isCorrectOption) {
                  // Missed correct option - show visually regardless of difficulty to educate
                  buttonStyle = "border-green-500 border-dashed text-green-800 dark:text-green-200 opacity-70";
                } else {
                  // Unselected, irrelevant
                  buttonStyle = "border-gray-100 dark:border-slate-700 opacity-50";
                }
              } else if (isSelected) {
                // Selected before submit
                buttonStyle = "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-100 ring-1 ring-yellow-500";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-lg ${buttonStyle} text-gray-700 dark:text-gray-200`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 min-w-[24px] h-6 flex items-center justify-center`}>
                      {isSubmitted ? (
                        <>
                          {isSelected && isCorrectOption && <IconCheck />}
                          {isSelected && !isCorrectOption && <IconX />}
                          {!isSelected && isCorrectOption && <IconCheck />} {/* Show missed correct answers */}
                          {!isSelected && !isCorrectOption && <div className="w-5 h-5 rounded border-2 border-gray-300 dark:border-slate-500" />}
                        </>
                      ) : (
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-yellow-500 border-yellow-500' : 'border-gray-300 dark:border-slate-500'}`}>
                          {isSelected && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mt-8 p-6 rounded-xl border-l-4 animate-fade-in ${
              isQuestionCorrect 
                ? "bg-green-50 border-green-500 dark:bg-green-900/20" 
                : "bg-red-50 border-red-500 dark:bg-red-900/20"
            }`}>
              {/* Status Header */}
              <div className={`font-bold text-lg mb-4 flex items-center gap-2 ${
                isQuestionCorrect ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
              }`}>
                {isQuestionCorrect ? <IconCheck /> : <IconX />}
                {isQuestionCorrect ? t.resultCorrect : t.resultWrong}
              </div>
              
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{t.explanation}</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {qExplanation}
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-6 flex justify-end">
          {!isSubmitted ? (
            <Button 
              onClick={submitAnswer}
              disabled={currentSelection.length === 0}
              className="w-full md:w-auto px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.checkAnswer}
            </Button>
          ) : (
            <Button 
              onClick={nextQuestion} 
              className="w-full md:w-auto px-8 py-3 text-lg"
            >
              {currentQuestionIndex === activeQuestions.length - 1 ? t.finishTest : t.nextQuestion} <IconArrowRight />
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const correctCount = answers.reduce((acc, ans, idx) => {
      if (!ans) return acc;
      const question = activeQuestions[idx];
      const correct = isCorrectAnswer(ans, question.correctAnswerIndices);
      return (acc || 0) + (correct ? 1 : 0);
    }, 0) || 0;
    
    const percentage = Math.round((correctCount / activeQuestions.length) * 100);
    const passed = percentage >= 85;

    return (
      <div className="max-w-2xl mx-auto p-6 min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center w-full">
          <div className="mb-8">
            {passed ? (
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconAward />
              </div>
            ) : (
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconX />
              </div>
            )}
            <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
              {passed ? t.congrats : t.trainingNeeded}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {passed ? t.ready : t.notReady}
            </p>
          </div>

          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 mb-8">
            {percentage}%
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10 text-gray-600 dark:text-gray-300">
            <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
              <div className="text-2xl font-bold text-green-500">{correctCount}</div>
              <div className="text-sm">{t.correct}</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
              <div className="text-2xl font-bold text-red-500">{activeQuestions.length - correctCount}</div>
              <div className="text-sm">{t.wrong}</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button onClick={() => startTest(currentTestMode)} className="w-full py-3 text-lg">
              <IconRefresh /> {t.tryAgain}
            </Button>
            <Button variant="secondary" onClick={() => setView('menu')} className="w-full py-3">
              <IconHome /> {t.backToMenu}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-slate-900 dark:to-slate-800 -z-10" />
      
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="cursor-pointer" onClick={() => setView('menu')}>
          <img 
            src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} 
            alt="FireGOLD" 
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang('cz')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${lang === 'cz' ? 'ring-2 ring-yellow-500 shadow-md scale-110' : 'hover:scale-105 opacity-90 hover:opacity-100'}`}
              title="Česky"
            >
              <img src={FLAG_CZ} alt="CZ" className="w-full h-full object-cover rounded-full" />
            </button>
            <button 
              onClick={() => setLang('sk')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${lang === 'sk' ? 'ring-2 ring-yellow-500 shadow-md scale-110' : 'hover:scale-105 opacity-90 hover:opacity-100'}`}
              title="Slovensky"
            >
              <img src={FLAG_SK} alt="SK" className="w-full h-full object-cover rounded-full" />
            </button>
          </div>

          <div className="h-6 w-px bg-gray-300 dark:bg-slate-700 mx-1"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-300"
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto">
        {view === 'menu' && renderMenu()}
        {view === 'test' && renderTest()}
        {view === 'results' && renderResults()}
      </main>
    </div>
  );
}

export default App;