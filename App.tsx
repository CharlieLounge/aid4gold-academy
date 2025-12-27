import React, { useState, useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';
import { questions } from './data/questions';
import { Category, Question, TestMode, StudyHelpObject } from './types';
import { 
  IconCheck, IconX, IconMoon, IconSun, IconBook, IconAward, 
  IconChart, IconArrowRight, IconArrowLeft, IconRefresh, IconHome, IconBookmark,
  IconSettings, IconInfo, IconHelp, IconClose
} from './components/IconComponents';

// --- ASSETS ---
const LOGO_LIGHT = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69418ecd75b607ccd02bfe07.png";
const LOGO_DARK = "https://storage.googleapis.com/msgsndr/iNNiZuenpqXYxyCSZaNX/media/694f18bfe889d33cbb7f0b10.png";
const FLAG_CZ = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69406d9bb4f4204c1e6cdf88.png";
const FLAG_SK = "https://storage.googleapis.com/msgsndr/ZHNl4kqrSx66h0YqV4Un/media/69406d9bca72982763169215.png";

// --- TRANSLATIONS ---

const translations = {
  cz: {
    title: "FireGOLD Academy",
    subtitle: "Váš průvodce k úspěšné certifikaci",
    training: "Trénink",
    selectCategories: "Vyberte kategorie:",
    multiChoiceHelp: "Upozornit, pokud má otázka více správných odpovědí",
    savedQuestions: "Uložené otázky",
    startSelected: "Spustit trénink vybraných",
    startFull: "Kompletní cvičný test (vše)",
    startMistakes: "Chybné otázky",
    stats: "Vaše statistiky",
    finishedTests: "Dokončených testů",
    successRate: "Celková úspěšnost",
    trend: "Vývoj úspěšnosti (posledních 20 testů)",
    problematicTitle: "Nejčastější chyby",
    noMistakes: "Zatím nemáte žádné chyby. Skvělá práce!",
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
    correctAnswersList: "Všechny správné odpovědi:",
    viewHistory: "Historie testů",
    historyTitle: "Vaše historie",
    date: "Datum",
    score: "Skóre",
    reviewTest: "Detail testu",
    backToHistory: "Zpět na historii",
    noSessions: "Zatím jste nedokončili žádný test.",
    help: "Nápověda k tématu",
    hintsDatabase: "Databáze nápověd",
    hintsSubtitle: "Přehled všech studijních nápověd podle kategorií",
    comingSoon: "Již brzy",
    searchPlaceholder: "Hledat otázku...",
    noHintsFound: "Nic nenalezeno.",
    hintsCount: "nápověd",
    openHint: "Otevřít"
  },
  sk: {
    title: "FireGOLD Academy",
    subtitle: "Váš sprievodca k úspešnej certifikácii",
    training: "Tréning",
    selectCategories: "Vyberte kategórie:",
    multiChoiceHelp: "Upozorniť, ak má otázka viac správnych odpovedí",
    savedQuestions: "Uložené otázky",
    startSelected: "Spustiť tréning vybraných",
    startFull: "Kompletný cvičný test (všetko)",
    startMistakes: "Chybné otázky",
    stats: "Vaše štatistiky",
    finishedTests: "Dokončených testov",
    successRate: "Celková úspešnosť",
    trend: "Vývoj úspešnosti (posledných 20 testov)",
    problematicTitle: "Najčastejšie chyby",
    noMistakes: "Zatiaľ nemáte žiadne chyby. Skvelá práca!",
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
    correctAnswersList: "Všetky správne odpovede:",
    viewHistory: "História testov",
    historyTitle: "Vaša história",
    date: "Dátum",
    score: "Skóre",
    reviewTest: "Detail testu",
    backToHistory: "Späť na históriu",
    noSessions: "Zatiaľ ste nedokončili žiadny test.",
    help: "Nápoveda k téme",
    hintsDatabase: "Databáza nápovedí",
    hintsSubtitle: "Prehľad všetkých študijných nápovedí podľa kategórií",
    comingSoon: "Už čoskoro",
    searchPlaceholder: "Hľadať otázku...",
    noHintsFound: "Nič sa nenašlo.",
    hintsCount: "nápovedí",
    openHint: "Otvoriť"
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
    [Category.GOLD_MARKET]: "Všeobecné znalosti o zlate a prachu",
    [Category.PRODUCTS]: "Produkty a procesy (iiplan)",
    [Category.FEES_COSTS]: "Poplatky a náklady",
    [Category.COMMISSIONS]: "Provízie a kariéra",
    [Category.LEGAL_TAX]: "Legislatíva, dane a AML",
    [Category.ETHICS_COMPANY]: "O spoločnosti a etika"
  }
};

// --- COMPONENTS ---

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'danger' }> = ({ 
  children, variant = 'primary', className = '', ...props 
}) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white shadow-lg shadow-yellow-500/30",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/30"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface TestSession {
  id: number;
  date: string;
  percentage: number;
  correctCount: number;
  totalCount: number;
  mode: string;
  answers: {
    questionId: number;
    userSelection: number[];
    isCorrect: boolean;
  }[];
}

const ProgressChart = ({ 
  sessions, 
  onBarClick,
  labels 
}: { 
  sessions: TestSession[], 
  onBarClick: (session: TestSession) => void,
  labels: { noData: string, cert: string } 
}) => {
  if (!sessions || sessions.length === 0) {
    return (
      <div className="h-[150px] flex items-center justify-center text-gray-400 dark:text-gray-300 text-sm border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl">
        {labels.noData}
      </div>
    );
  }

  const certLevel = 100 - 85; 
  const minSlots = 10;
  const effectiveCount = Math.max(sessions.length, minSlots);
  
  return (
    <div className="w-full h-[120px] mt-4 relative overflow-hidden">
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="100" stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" strokeWidth="0.5" />
        <line x1="0" y1={certLevel} x2="100" y2={certLevel} className="text-green-500 dark:text-green-400 opacity-60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
        {sessions.map((session, index) => {
          const slotWidth = 100 / Number(effectiveCount);
          const gap = Number(slotWidth) * 0.1;
          const barWidth = Number(slotWidth) - Number(gap);
          const x = Number(index) * Number(slotWidth) + (Number(gap) / 2);
          const y = 100 - Number(session.percentage);
          const isPassing = Number(session.percentage) >= 85;
          return (
            <rect 
              key={session.id} 
              x={x} 
              y={y} 
              width={barWidth} 
              height={session.percentage} 
              rx="1" 
              onClick={() => onBarClick(session)}
              className={`${isPassing ? 'fill-green-500 dark:fill-green-400' : 'fill-yellow-500'} cursor-pointer transition-all duration-300 hover:opacity-80 origin-bottom hover:scale-y-[1.02]`}
            >
              <title>{session.date}: {session.percentage}%</title>
            </rect>
          );
        })}
      </svg>
      <div 
        className="absolute right-0 bg-green-50/90 dark:bg-green-900/50 backdrop-blur-sm text-green-700 dark:text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-green-200 dark:border-green-800 pointer-events-none whitespace-nowrap"
        style={{ top: `${certLevel}%`, transform: 'translateY(-50%)' }}
      >
        85% {labels.cert}
      </div>
    </div>
  );
};

// --- LOGIC HELPERS ---

const isCorrectAnswer = (userSelection: number[], correctIndices: number[]): boolean => {
  return userSelection.length === correctIndices.length && 
         userSelection.every(val => correctIndices.includes(val));
};

/**
 * Nahrazuje mezery za jednopísmennými předložkami a spojkami za nezalomitelné mezery (\u00A0).
 * Také ošetřuje české spojovníky a pomlčky.
 */
const formatCzechTypo = (text: string | undefined): string => {
  if (!text) return '';
  // Jednopísmenné předložky a spojky na konci řádku (v, k, s, z, o, u, i, a)
  let formatted = text.replace(/ ([vkiszoua]) /gi, ' $1\u00A0');
  // Počáteční předložky na začátku odstavce
  formatted = formatted.replace(/^([vkiszoua]) /gi, '$1\u00A0');
  // Pomlčky (en dash) a spojovníky
  formatted = formatted.replace(/ – /g, '\u00A0– ');
  return formatted;
};

// --- APP COMPONENT ---

interface AppStats {
  totalTests: number;
  totalQuestions: number;
  totalCorrect: number;
  history: number[];
  errorCounts: Record<number, number>;
  sessions: TestSession[];
}

function App() {
  const { theme, toggleTheme } = useTheme();
  
  const [lang, setLang] = useState<'cz' | 'sk'>(() => {
    const saved = localStorage.getItem('firegold_lang');
    return (saved as 'cz' | 'sk') || 'cz';
  });

  const [multiChoiceHelpEnabled, setMultiChoiceHelpEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('firegold_multi_choice_help');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [currentTestMode, setCurrentTestMode] = useState<TestMode | 'saved' | 'mistakes'>('selected');

  useEffect(() => {
    localStorage.setItem('firegold_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('firegold_multi_choice_help', JSON.stringify(multiChoiceHelpEnabled));
  }, [multiChoiceHelpEnabled]);

  const t = translations[lang];

  const [view, setView] = useState<'menu' | 'test' | 'results' | 'history' | 'session_detail' | 'hints'>('menu');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number[] | null)[]>([]);
  const [currentSelection, setCurrentSelection] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedSession, setSelectedSession] = useState<TestSession | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [selectedHelpQuestion, setSelectedHelpQuestion] = useState<Question | null>(null);
  const [hintSearchQuery, setHintSearchQuery] = useState('');
  
  const [savedQuestionIds, setSavedQuestionIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('firegold_saved_questions');
    return saved ? JSON.parse(saved) : [];
  });

  const [stats, setStats] = useState<AppStats>(() => {
    const saved = localStorage.getItem('firegold_stats');
    const parsed = saved ? JSON.parse(saved) : {};
    return {
      totalTests: Number(parsed.totalTests) || 0,
      totalQuestions: Number(parsed.totalQuestions) || 0,
      totalCorrect: Number(parsed.totalCorrect) || 0,
      history: Array.isArray(parsed.history) ? parsed.history.map(Number) : [],
      errorCounts: parsed.errorCounts || {},
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : []
    };
  });

  const categories = Object.values(Category);

  const startTest = (mode: TestMode | 'saved' | 'mistakes') => {
    setCurrentTestMode(mode);
    let filteredQuestions: Question[] = [];
    
    if (mode === 'full') {
      filteredQuestions = [...questions];
    } else if (mode === 'single' || mode === 'selected') {
      filteredQuestions = questions.filter(q => selectedCategories.includes(q.category));
    } else if (mode === 'saved') {
      filteredQuestions = questions.filter(q => savedQuestionIds.includes(q.id));
    } else if (mode === 'mistakes') {
      const mistakeIds = Object.keys(stats.errorCounts).map(Number).filter(id => (Number(stats.errorCounts[id]) || 0) > 0);
      filteredQuestions = questions.filter(q => mistakeIds.includes(q.id));
    }

    if (filteredQuestions.length === 0) return;

    filteredQuestions = filteredQuestions.sort(() => (Math.random() > 0.5 ? 1 : -1));

    setActiveQuestions(filteredQuestions);
    setAnswers(new Array(filteredQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setCurrentSelection([]);
    setShowExplanation(false);
    setView('test');
  };

  const handleOptionClick = (optionIndex: number) => {
    if (answers[currentQuestionIndex] !== null) return;
    setCurrentSelection(prev => 
      prev.includes(optionIndex) ? prev.filter(i => i !== optionIndex) : [...prev, optionIndex]
    );
  };

  const submitAnswer = () => {
    if (answers[currentQuestionIndex] !== null) return;
    
    const question = activeQuestions[currentQuestionIndex];
    const isCorrect = isCorrectAnswer(currentSelection, question.correctAnswerIndices);
    
    const newErrorCounts = { ...stats.errorCounts };
    if (!isCorrect) {
      newErrorCounts[question.id] = (Number(newErrorCounts[question.id]) || 0) + 1;
    } else {
      const currentErrCount = Number(newErrorCounts[question.id]) || 0;
      if (currentErrCount > 0) {
        newErrorCounts[question.id] = currentErrCount - 1;
      }
      if (newErrorCounts[question.id] === 0) {
        delete newErrorCounts[question.id];
      }
    }

    setStats(prev => ({ ...prev, errorCounts: newErrorCounts }));
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = currentSelection;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const finishTest = () => {
    const correctCount = answers.reduce<number>((acc, ans, idx) => {
      if (!ans) return acc;
      const question = activeQuestions[idx];
      return Number(acc) + (isCorrectAnswer(ans, question.correctAnswerIndices) ? 1 : 0);
    }, 0);

    const percentage = activeQuestions.length > 0 ? Math.round((Number(correctCount) / Number(activeQuestions.length)) * 100) : 0;

    // Create session record
    const sessionRecord: TestSession = {
      id: Date.now(),
      date: new Date().toLocaleString(lang === 'cz' ? 'cs-CZ' : 'sk-SK'),
      percentage,
      correctCount,
      totalCount: activeQuestions.length,
      mode: currentTestMode,
      answers: activeQuestions.map((q, idx) => ({
        questionId: q.id,
        userSelection: answers[idx] || [],
        isCorrect: answers[idx] ? isCorrectAnswer(answers[idx]!, q.correctAnswerIndices) : false
      }))
    };

    const newStats: AppStats = {
      ...stats,
      totalTests: Number(stats.totalTests) + 1,
      totalQuestions: Number(stats.totalQuestions) + Number(activeQuestions.length),
      totalCorrect: Number(stats.totalCorrect) + Number(correctCount),
      history: [...stats.history, percentage].slice(-20),
      sessions: [sessionRecord, ...stats.sessions].slice(0, 50) // Store last 50 sessions
    };
    
    setStats(newStats);
    localStorage.setItem('firegold_stats', JSON.stringify(newStats));
    setView('results');
  };

  const toggleSavedQuestion = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSavedQuestionIds(prev => prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]);
  };

  const nextQuestion = () => {
    if (Number(currentQuestionIndex) < (Number(activeQuestions.length) - 1)) {
      setCurrentQuestionIndex(prev => Number(prev) + 1);
      setCurrentSelection([]);
      setShowExplanation(false);
    } else {
      finishTest();
    }
  };

  // Keyboard shortcut for Enter and Escape (help)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isHelpOpen) {
        setIsHelpOpen(false);
        return;
      }
      
      if (e.key === 'Enter' && view === 'test' && !isHelpOpen) {
        const isSubmitted = answers[currentQuestionIndex] !== null;
        if (!isSubmitted) {
          if (currentSelection.length > 0) {
            submitAnswer();
          }
        } else {
          nextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, currentQuestionIndex, answers, currentSelection, isHelpOpen]);

  const openSessionDetail = (session: TestSession) => {
    setSelectedSession(session);
    setView('session_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mistakeQuestionsCount = Object.keys(stats.errorCounts).length;
  const topMistakes = Object.entries(stats.errorCounts)
    .map(([id, count]) => ({ 
      question: questions.find(q => q.id === Number(id)), 
      count: Number(count) 
    }))
    .filter(item => item.question)
    .sort((a, b) => (Number(b.count) || 0) - (Number(a.count) || 0))
    .slice(0, 3);

  // Get chronological last 20 sessions for the chart
  const chartSessions = [...stats.sessions].slice(0, 20).reverse();

  // --- VIEWS ---

  const renderHelpModal = (q: Question | null) => {
    if (!isHelpOpen || !q) return null;
    
    // Pick the right help based on language
    const help = lang === 'sk' && q.studyHelp_sk ? q.studyHelp_sk : q.studyHelp;
    
    if (!help) return null;

    const isObject = typeof help === 'object';
    const helpObj = isObject ? (help as StudyHelpObject) : null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsHelpOpen(false)}
        />
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-xl relative z-10 overflow-hidden animate-fade-in-down flex flex-col max-h-[85vh]">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 sticky top-0 z-10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <IconHelp /> {formatCzechTypo(t.help)}
              </h2>
              <button 
                onClick={() => setIsHelpOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-gray-500"
              >
                <IconClose />
              </button>
            </div>
            {isObject && helpObj?.meta && (
              <div className="flex flex-wrap gap-2">
                {helpObj.meta.topic && (
                  <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase tracking-wider rounded-md border border-blue-100 dark:border-blue-800">
                    📌 {formatCzechTypo(helpObj.meta.topic)}
                  </span>
                )}
                {helpObj.meta.readTime && (
                  <span className="px-2 py-0.5 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-[10px] font-black uppercase tracking-wider rounded-md border border-gray-100 dark:border-slate-600">
                    ⏱️ {formatCzechTypo(helpObj.meta.readTime)}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div 
            className="overflow-y-auto p-6 md:p-8 custom-scrollbar flex-1 bg-gray-50/30 dark:bg-slate-900/20"
            style={{ textWrap: 'pretty', overflowWrap: 'anywhere', wordBreak: 'normal', hyphens: 'none' } as any}
          >
            {!isObject ? (
              <div className="text-gray-800 dark:text-gray-100 whitespace-pre-wrap leading-relaxed text-sm md:text-base font-medium">
                {formatCzechTypo(help as string)}
              </div>
            ) : (
              <div className="space-y-4">
                {helpObj?.sections.map((section, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {section.icon && (
                        <span className="text-xl md:text-2xl flex-shrink-0 mt-0.5">{section.icon}</span>
                      )}
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {formatCzechTypo(section.title)}
                      </h3>
                    </div>
                    
                    {section.text && (
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                        {formatCzechTypo(section.text)}
                      </p>
                    )}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2 list-none">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 dark:text-gray-200 leading-snug font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span>{formatCzechTypo(bullet)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800">
            <Button onClick={() => setIsHelpOpen(false)} className="w-full py-3">Rozumím</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderMenu = () => (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col justify-center min-h-[calc(100vh-80px)] w-full">
      <div className="text-center mb-6 animate-fade-in-down flex flex-col items-center">
        <img src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} alt="FireGOLD Academy" className="h-32 md:h-40 w-auto object-contain mb-4" />
        <p className="text-gray-600 dark:text-gray-100 text-lg break-words max-w-full font-medium">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full items-start">
        {/* Training Card */}
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 w-full overflow-hidden">
          <div className="flex justify-between items-center mb-6 gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 flex-1 leading-tight">
              <IconBook /> <span>{t.training}</span>
            </h2>
            <button 
              onClick={() => setView('hints')}
              className="text-sm font-bold text-yellow-600 dark:text-yellow-400 hover:underline flex items-center gap-1 whitespace-nowrap flex-shrink-0"
            >
              {t.hintsDatabase} <IconArrowRight />
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2 font-medium">{t.selectCategories}</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors break-words max-w-full font-medium ${selectedCategories.includes(cat) ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200'}`}
                >
                  {categoryTranslations[lang][cat]}
                </button>
              ))}
            </div>

            <div className="pt-4 pb-2">
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" checked={multiChoiceHelpEnabled} onChange={() => setMultiChoiceHelpEnabled(!multiChoiceHelpEnabled)} />
                  <div className={`block w-10 h-6 rounded-full transition-colors ${multiChoiceHelpEnabled ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-slate-600'}`}></div>
                  <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform ${multiChoiceHelpEnabled ? 'translate-x-4' : ''}`}></div>
                </div>
                <div className="ml-3 text-sm text-gray-700 dark:text-gray-200 font-bold group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors leading-tight">
                  {t.multiChoiceHelp}
                </div>
              </label>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-2">
              {savedQuestionIds.length > 0 && (
                <button
                  onClick={() => startTest('saved')}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border-2 border-yellow-500/50 bg-yellow-50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 transition-colors w-full"
                >
                  <span className="flex items-center gap-2 font-bold min-w-0"><IconBookmark filled /> <span className="break-words text-left leading-tight">{t.savedQuestions}</span></span>
                  <span className="bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-50 text-xs px-2 py-1 rounded-full font-black flex-shrink-0 ml-2">{savedQuestionIds.length}</span>
                </button>
              )}
              {mistakeQuestionsCount > 0 && (
                <button
                  onClick={() => startTest('mistakes')}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border-2 border-red-500/50 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-800 dark:text-red-200 transition-colors w-full"
                >
                  <span className="flex items-center gap-2 font-bold min-w-0"><IconX /> <span className="break-words text-left leading-tight">{t.startMistakes}</span></span>
                  <span className="bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-50 text-xs px-2 py-1 rounded-full font-black flex-shrink-0 ml-2">{mistakeQuestionsCount}</span>
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Button onClick={() => startTest('selected')} disabled={selectedCategories.length === 0} className="w-full disabled:opacity-50 disabled:cursor-not-allowed">
              {t.startSelected}
            </Button>
            <Button variant="outline" onClick={() => { setSelectedCategories(categories); startTest('full'); }} className="w-full">
              {t.startFull}
            </Button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 w-full overflow-hidden">
          <div className="flex justify-between items-center mb-6 gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 flex-1 leading-tight">
              <IconChart /> <span>{t.stats}</span>
            </h2>
            <button 
              onClick={() => setView('history')}
              className="text-sm font-bold text-yellow-600 dark:text-yellow-400 hover:underline flex items-center gap-1 whitespace-nowrap flex-shrink-0"
            >
              {t.viewHistory} <IconArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center mb-6">
            <div className="p-4 bg-yellow-50 dark:bg-slate-700/50 rounded-xl min-w-0">
              <div className="text-3xl font-black text-yellow-600 dark:text-yellow-400 truncate">{stats.totalTests}</div>
              <div className="text-[10px] text-gray-700 dark:text-gray-100 font-black uppercase tracking-wider leading-tight">{t.finishedTests}</div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-slate-700/50 rounded-xl min-w-0">
              <div className="text-3xl font-black text-yellow-600 dark:text-yellow-400 truncate">
                {Number(stats.totalQuestions) > 0 ? Math.round((Number(stats.totalCorrect) / Number(stats.totalQuestions)) * 100) : 0}%
              </div>
              <div className="text-[10px] text-gray-700 dark:text-gray-100 font-black uppercase tracking-wider leading-tight">{t.successRate}</div>
            </div>
          </div>
          
          <div className="mb-6 w-full">
             <div className="text-sm font-bold text-gray-500 dark:text-gray-300 mb-2">{t.trend}</div>
             <ProgressChart 
               sessions={chartSessions} 
               onBarClick={openSessionDetail}
               labels={{ noData: t.noData, cert: t.certification }} 
             />
          </div>

          <div className="w-full">
             <div className="text-sm font-bold text-gray-800 dark:text-white mb-3">{t.problematicTitle}</div>
             {topMistakes.length > 0 ? (
               <div className="space-y-2">
                 {topMistakes.map((item, idx) => (
                   <div key={idx} className="flex items-start justify-between p-3 bg-gray-50 dark:bg-slate-900 rounded-lg text-sm border border-gray-100 dark:border-slate-700 shadow-sm gap-3 w-full">
                     <span className="flex-1 min-w-0 text-gray-800 dark:text-white font-bold break-words leading-tight">
                       {lang === 'sk' && item.question?.text_sk ? item.question.text_sk : item.question?.text}
                     </span>
                     <span className="font-black text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800 flex-shrink-0 text-xs">
                       {item.count}x
                     </span>
                   </div>
                 ))}
               </div>
             ) : (
               <div className="text-sm text-gray-400 dark:text-gray-300 italic text-center p-4 border border-dashed border-gray-200 dark:border-slate-700 rounded-xl">
                 {t.noMistakes}
               </div>
             )}
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
    const activeSelection = isSubmitted ? submittedAnswer : currentSelection;
    const isQuestionCorrect = isSubmitted && isCorrectAnswer(activeSelection, question.correctAnswerIndices);
    const isMultiChoice = question.correctAnswerIndices.length > 1;
    const showHint = multiChoiceHelpEnabled && isMultiChoice;

    return (
      <div className="max-w-3xl mx-auto p-4 md:p-6 min-h-screen flex flex-col w-full overflow-x-hidden">
        <div className="flex justify-between items-center mb-6 gap-2">
          <Button variant="secondary" onClick={() => setView('menu')} className="!px-3 flex-shrink-0"><IconHome /></Button>
          <div className="flex-1 mx-2 min-w-0">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-200 font-bold mb-1">
              <span className="truncate">{t.question} {Number(currentQuestionIndex) + 1} / {activeQuestions.length}</span>
              <span>{activeQuestions.length > 0 ? Math.round((Number(currentQuestionIndex) / Number(activeQuestions.length)) * 100) : 0}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden w-full">
              <div className="h-full bg-yellow-500 transition-all duration-300" style={{ width: `${activeQuestions.length > 0 ? (Number(currentQuestionIndex) / Number(activeQuestions.length)) * 100 : 0}%` }} />
            </div>
          </div>
          <div className="text-[10px] px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100 font-black hidden sm:block truncate max-w-[120px] uppercase tracking-tighter">{categoryTranslations[lang][question.category]}</div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-10 flex-1 relative w-full overflow-hidden">
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex-1 min-w-0 flex items-start gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-relaxed break-words flex-1">{lang === 'sk' && question.text_sk ? question.text_sk : question.text}</h3>
              {!!(question.studyHelp || question.studyHelp_sk) && (
                <button 
                  onClick={() => { setSelectedHelpQuestion(question); setIsHelpOpen(true); }}
                  className="p-1.5 mt-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:scale-110 transition-all shadow-sm flex-shrink-0"
                  title={t.help}
                >
                  <IconHelp />
                </button>
              )}
            </div>
            <button onClick={(e) => toggleSavedQuestion(e, question.id)} className={`p-2 rounded-full transition-colors flex-shrink-0 ${isSaved ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' : 'text-gray-400 dark:text-gray-300 hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-slate-700'}`} title={isSaved ? t.removeQuestion : t.saveQuestion}>
              <IconBookmark filled={isSaved} />
            </button>
          </div>

          {showHint && (
            <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center gap-3 w-full">
               <div className="text-blue-500 dark:text-blue-300 flex-shrink-0"><IconInfo /></div>
               <div className="min-w-0">
                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100 break-words">{t.multiChoiceHint}</p>
                  <p className="text-xs text-blue-800 dark:text-blue-200 break-words font-medium">{t.selectAnswers}</p>
               </div>
            </div>
          )}

          <div className="space-y-4 w-full">
            {(lang === 'sk' && question.options_sk ? question.options_sk : question.options).map((option, idx) => {
              const isSelected = activeSelection.includes(idx);
              const isCorrectOption = question.correctAnswerIndices.includes(idx);
              let buttonStyle = "border-gray-200 dark:border-slate-600 hover:border-yellow-500 dark:hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-slate-700";
              if (isSubmitted) {
                if (isSelected && isCorrectOption) buttonStyle = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-900 dark:text-green-100";
                else if (isSelected && !isCorrectOption) buttonStyle = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-900 dark:text-red-100";
                else if (!isSelected && isCorrectOption) buttonStyle = "border-green-500 border-dashed text-green-800 dark:text-green-200 opacity-100";
                else buttonStyle = "border-gray-100 dark:border-slate-700 opacity-50";
              } else if (isSelected) buttonStyle = "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-100 ring-1 ring-yellow-500";

              return (
                <button key={idx} onClick={() => handleOptionClick(idx)} disabled={isSubmitted} className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-base md:text-lg font-medium ${buttonStyle} text-gray-800 dark:text-gray-100 overflow-hidden`}>
                  <div className="flex items-start gap-3 w-full">
                    <div className="mt-1 min-w-[24px] h-6 flex items-center justify-center flex-shrink-0">
                      {isSubmitted ? (
                        isSelected && isCorrectOption ? <IconCheck /> : isSelected && !isCorrectOption ? <IconX /> : !isSelected && isCorrectOption ? <IconCheck /> : <div className="w-5 h-5 rounded border-2 border-gray-300 dark:border-slate-500" />
                      ) : (
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-yellow-500 border-yellow-500' : 'border-gray-300 dark:border-slate-500'}`}>
                          {isSelected && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      )}
                    </div>
                    <span className="break-words flex-1 min-w-0">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`mt-8 p-6 rounded-xl border-l-4 animate-fade-in w-full ${isQuestionCorrect ? "bg-green-50 border-green-500 dark:bg-green-900/20" : "bg-red-50 border-red-500 dark:bg-red-900/20"}`}>
              <div className={`font-black text-lg mb-4 flex items-center gap-2 ${isQuestionCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}>
                <div className="flex-shrink-0">{isQuestionCorrect ? <IconCheck /> : <IconX />}</div>
                <span className="break-words">{isQuestionCorrect ? t.resultCorrect : t.resultWrong}</span>
              </div>
              <h4 className="font-black text-gray-900 dark:text-white mb-2">{t.explanation}</h4>
              <p className="text-gray-800 dark:text-gray-100 leading-relaxed break-words font-medium">{lang === 'sk' && question.explanation_sk ? question.explanation_sk : question.explanation}</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end w-full">
          {!isSubmitted ? (
            <Button onClick={submitAnswer} disabled={currentSelection.length === 0} className="w-full md:w-auto px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed">{t.checkAnswer}</Button>
          ) : (
            <Button onClick={nextQuestion} className="w-full md:w-auto px-8 py-3 text-lg">
              {Number(currentQuestionIndex) === (Number(activeQuestions.length) - 1) ? t.finishTest : t.nextQuestion} <IconArrowRight />
            </Button>
          )}
        </div>

        {renderHelpModal(selectedHelpQuestion)}
      </div>
    );
  };

  const renderHistory = () => (
    <div className="max-w-3xl mx-auto p-4 md:p-6 min-h-screen w-full overflow-x-hidden">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="secondary" onClick={() => setView('menu')} className="!px-3 flex-shrink-0"><IconHome /></Button>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white truncate">{t.historyTitle}</h2>
      </div>

      {stats.sessions.length > 0 ? (
        <div className="space-y-4 w-full">
          {stats.sessions.map((session) => (
            <div 
              key={session.id} 
              onClick={() => openSessionDetail(session)}
              className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 flex justify-between items-center hover:border-yellow-500 dark:hover:border-yellow-500 cursor-pointer transition-all hover:scale-[1.01] gap-4 w-full overflow-hidden"
            >
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1 truncate">{session.date}</div>
                <div className="text-sm text-gray-600 dark:text-gray-200 font-bold truncate">{session.correctCount} / {session.totalCount} {t.correct.toLowerCase()}</div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className={`text-xl md:text-2xl font-black ${session.percentage >= 85 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                  {session.percentage}%
                </div>
                <div className="text-gray-400 dark:text-gray-300"><IconArrowRight /></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-20 bg-white dark:bg-slate-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-slate-700 w-full">
          <p className="text-gray-500 dark:text-gray-300 font-medium">{t.noSessions}</p>
        </div>
      )}
    </div>
  );

  const renderSessionDetail = () => {
    if (!selectedSession) return null;

    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 min-h-screen pb-12 animate-fade-in w-full overflow-x-hidden">
        <div className="sticky top-0 z-20 py-4 bg-gray-50/95 dark:bg-slate-900/95 backdrop-blur-sm mb-6 w-full">
          <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 w-full gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Button variant="secondary" onClick={() => setView('history')} className="!p-2 sm:!px-3 group flex-shrink-0">
                <IconArrowLeft className="transition-transform group-hover:-translate-x-1" />
                <span className="hidden md:inline ml-1 font-bold">{t.backToHistory}</span>
              </Button>
              <div className="h-10 w-px bg-gray-200 dark:bg-slate-700 hidden sm:block"></div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-xl font-black text-gray-800 dark:text-white leading-tight truncate">{t.reviewTest}</h2>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-200 font-bold truncate">{selectedSession.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <div className={`text-xl sm:text-3xl font-black ${selectedSession.percentage >= 85 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                {selectedSession.percentage}%
              </div>
              <Button variant="outline" onClick={() => setView('menu')} className="!p-2 sm:!px-3" title={t.backToMenu}>
                <IconHome />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full">
          {selectedSession.answers.map((record, idx) => {
            const question = questions.find(q => q.id === record.questionId)!;
            return (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-all hover:shadow-2xl w-full">
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h3 className="text-lg md:text-xl font-black text-gray-800 dark:text-white leading-relaxed break-words flex-1 min-w-0">
                      <span className="text-yellow-600 dark:text-yellow-500 mr-2">{idx + 1}.</span>
                      {lang === 'sk' && question.text_sk ? question.text_sk : question.text}
                    </h3>
                    <div className={record.isCorrect ? "text-green-500 p-2 bg-green-50 dark:bg-green-900/20 rounded-full flex-shrink-0" : "text-red-500 p-2 bg-red-50 dark:bg-red-900/20 rounded-full flex-shrink-0"}>
                      {record.isCorrect ? <IconCheck /> : <IconX />}
                    </div>
                  </div>

                  <div className="space-y-3 w-full">
                    {(lang === 'sk' && question.options_sk ? question.options_sk : question.options).map((option, optIdx) => {
                      const isSelected = record.userSelection.includes(optIdx);
                      const isCorrectOption = question.correctAnswerIndices.includes(optIdx);
                      
                      let style = "border-gray-100 dark:border-slate-700 opacity-60";
                      if (isSelected && isCorrectOption) style = "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-900 dark:text-green-100 opacity-100 font-bold";
                      else if (isSelected && !isCorrectOption) style = "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-900 dark:text-red-100 opacity-100 font-bold";
                      else if (!isSelected && isCorrectOption) style = "border-green-500 border-dashed text-green-800 dark:text-green-200 opacity-100 font-bold";

                      return (
                        <div key={optIdx} className={`p-4 rounded-xl border-2 text-sm md:text-base flex items-start gap-3 transition-all w-full overflow-hidden ${style}`}>
                          <div className="mt-0.5 flex-shrink-0">
                            {isCorrectOption ? <IconCheck className="w-4 h-4" /> : isSelected ? <IconX className="w-4 h-4" /> : <div className="w-4 h-4" />}
                          </div>
                          <span className="flex-1 min-w-0 break-words">{option}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 p-5 bg-gray-50 dark:bg-slate-900/50 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-inner w-full">
                    <div className="text-[10px] font-black text-gray-500 dark:text-gray-200 uppercase tracking-[0.2em] mb-2">{t.explanation}</div>
                    <p className="text-sm text-gray-700 dark:text-gray-100 leading-relaxed italic break-words font-medium">
                      {lang === 'sk' && question.explanation_sk ? question.explanation_sk : question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 mb-20 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Button 
            variant="primary" 
            onClick={() => { setView('history'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="w-full sm:w-auto px-8 py-3 text-lg"
          >
            <IconArrowLeft /> {t.backToHistory}
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => { setView('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="w-full sm:w-auto px-8 py-3 text-lg"
          >
            <IconHome /> {t.backToMenu}
          </Button>
        </div>
      </div>
    );
  };

  const renderHints = () => {
    // Only GOLD_MARKET is active currently. Filter questions that have studyHelp.
    const activeCategory = Category.GOLD_MARKET;
    const categoryQuestions = questions.filter(q => q.category === activeCategory && (q.studyHelp || q.studyHelp_sk));
    
    const filteredQuestions = categoryQuestions.filter(q => {
      const txt = lang === 'sk' && q.text_sk ? q.text_sk : q.text;
      return txt.toLowerCase().includes(hintSearchQuery.toLowerCase());
    });

    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 min-h-screen w-full overflow-x-hidden animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <Button variant="secondary" onClick={() => setView('menu')} className="!px-3 flex-shrink-0"><IconHome /></Button>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white truncate">{t.hintsDatabase}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium truncate">{t.hintsSubtitle}</p>
            </div>
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              value={hintSearchQuery}
              onChange={(e) => setHintSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all text-slate-900 dark:text-white font-medium pr-10"
            />
            <div className="absolute right-3 top-2.5 text-gray-400"><IconInfo className="w-5 h-5" /></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Active Category */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 md:p-8 bg-yellow-50/50 dark:bg-yellow-900/10 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500 text-white rounded-lg"><IconBook className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-gray-800 dark:text-white leading-tight">{categoryTranslations[lang][activeCategory]}</h3>
                  <p className="text-xs text-yellow-700 dark:text-yellow-400 font-bold">{categoryQuestions.length} {t.hintsCount}</p>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-50 dark:divide-slate-700">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((q) => {
                  const help = lang === 'sk' && q.studyHelp_sk ? q.studyHelp_sk : q.studyHelp;
                  const helpObj = typeof help === 'object' ? (help as StudyHelpObject) : null;
                  return (
                    <div 
                      key={q.id} 
                      onClick={() => { setSelectedHelpQuestion(q); setIsHelpOpen(true); }}
                      className="p-5 md:p-6 hover:bg-gray-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors flex items-center justify-between gap-4 group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-800 dark:text-gray-100 font-bold mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors leading-relaxed break-words">
                          {lang === 'sk' && q.text_sk ? q.text_sk : q.text}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {helpObj?.meta?.topic && (
                            <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase tracking-wider rounded border border-blue-100 dark:border-blue-800">
                              {formatCzechTypo(helpObj.meta.topic)}
                            </span>
                          )}
                          {helpObj?.meta?.readTime && (
                            <span className="px-2 py-0.5 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-[10px] font-black uppercase tracking-wider rounded border border-gray-100 dark:border-slate-600">
                              {formatCzechTypo(helpObj.meta.readTime)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-gray-400 group-hover:text-yellow-600 transition-all group-hover:translate-x-1 flex items-center gap-2">
                        <span className="text-xs font-black hidden md:inline uppercase tracking-widest">{t.openHint}</span>
                        <IconArrowRight />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-12 text-center text-gray-500 dark:text-gray-400 italic">
                  {t.noHintsFound}
                </div>
              )}
            </div>
          </div>

          {/* Coming Soon Categories */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 opacity-60">
            {categories.filter(cat => cat !== activeCategory).map((cat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 cursor-not-allowed">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-slate-700 text-gray-400 rounded-lg"><IconInfo className="w-5 h-5" /></div>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 text-[9px] font-black uppercase tracking-widest rounded">{t.comingSoon}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-snug">{categoryTranslations[lang][cat]}</h4>
              </div>
            ))}
          </div>
        </div>

        {renderHelpModal(selectedHelpQuestion)}
      </div>
    );
  };

  const renderResults = () => {
    const correctCount = answers.reduce<number>((acc, ans, idx) => {
      if (!ans) return acc;
      return Number(acc) + (isCorrectAnswer(ans, activeQuestions[idx].correctAnswerIndices) ? 1 : 0);
    }, 0);
    const percentage = activeQuestions.length > 0 ? Math.round((Number(correctCount) / Number(activeQuestions.length)) * 100) : 0;
    const passed = Number(percentage) >= 85;

    return (
      <div className="max-w-2xl mx-auto p-6 min-h-screen flex items-center justify-center w-full overflow-x-hidden">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center w-full overflow-hidden">
          <div className="mb-8 w-full">
            {passed ? (
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><IconAward /></div>
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><IconX /></div>
            )}
            <h2 className="text-2xl md:text-4xl font-black mb-2 text-gray-800 dark:text-white break-words">{passed ? t.congrats : t.trainingNeeded}</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-200 font-bold break-words">{passed ? t.ready : t.notReady}</p>
          </div>
          <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 mb-8">{percentage}%</div>
          <div className="grid grid-cols-2 gap-4 mb-10 text-gray-600 dark:text-gray-100 w-full">
            <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl min-w-0">
              <div className="text-xl md:text-2xl font-black text-green-600 dark:text-green-400 truncate">{correctCount}</div>
              <div className="text-xs md:text-sm leading-tight font-bold">{t.correct}</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl min-w-0">
              <div className="text-xl md:text-2xl font-black text-red-600 dark:text-red-400 truncate">{Number(activeQuestions.length) - Number(correctCount)}</div>
              <div className="text-xs md:text-sm leading-tight font-bold">{t.wrong}</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Button onClick={() => startTest(currentTestMode)} className="w-full py-3 text-lg"><IconRefresh /> {t.tryAgain}</Button>
            <Button variant="secondary" onClick={() => setView('menu')} className="w-full py-3"><IconHome /> {t.backToMenu}</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen font-sans w-full overflow-x-hidden ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-slate-900 dark:to-slate-800 -z-10 w-full h-full" />
      <nav className="p-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="cursor-pointer flex-shrink-0" onClick={() => setView('menu')}>
          <img src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} alt="FireGOLD" className="h-14 md:h-20 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <button onClick={() => setLang('cz')} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${lang === 'cz' ? 'ring-2 ring-yellow-500 shadow-md scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}`} title="Česky">
              <img src={FLAG_CZ} alt="CZ" className="w-full h-full object-cover rounded-full" />
            </button>
            <button onClick={() => setLang('sk')} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${lang === 'sk' ? 'ring-2 ring-yellow-500 shadow-md scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}`} title="Slovensky">
              <img src={FLAG_SK} alt="SK" className="w-full h-full object-cover rounded-full" />
            </button>
          </div>
          <div className="h-6 w-px bg-gray-300 dark:bg-slate-700 mx-0.5"></div>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-100">
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </nav>
      <main className="container mx-auto px-4 w-full overflow-x-hidden">
        {view === 'menu' && renderMenu()}
        {view === 'test' && renderTest()}
        {view === 'results' && renderResults()}
        {view === 'history' && renderHistory()}
        {view === 'session_detail' && renderSessionDetail()}
        {view === 'hints' && renderHints()}
      </main>
    </div>
  );
}

export default App;