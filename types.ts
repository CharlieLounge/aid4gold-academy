export enum Category {
  GOLD_MARKET = "Obecné znalosti o zlatě a trhu",
  PRODUCTS = "Produkty a procesy (iiplan)",
  FEES_COSTS = "Poplatky a náklady",
  COMMISSIONS = "Provize a kariéra",
  LEGAL_TAX = "Legislativa, daně a AML",
  ETHICS_COMPANY = "O společnosti a etika"
}

export interface StudyHelpSection {
  icon?: string;
  title: string;
  text?: string;
  bullets?: string[];
}

export interface StudyHelpObject {
  meta?: { topic?: string; readTime?: string };
  sections: StudyHelpSection[];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  explanation: string;
  // Slovak localization
  text_sk?: string;
  options_sk?: string[];
  explanation_sk?: string;
  
  studyHelp?: string | StudyHelpObject; // Volitelný studijní materiál / nápověda (string nebo objekt)
  studyHelp_sk?: string | StudyHelpObject; // Slovenská verze nápovědy
  
  correctAnswerIndices: number[]; // Changed to support multiple answers
  category: Category;
}

export interface UserStats {
  totalQuestionsAnswered: number;
  correctAnswers: number;
  categoryStats: Record<Category, { total: number; correct: number }>;
  lastTestScore: number | null;
  testsTaken: number;
}

export type TestMode = 'single' | 'selected' | 'full';

export interface TestConfig {
  mode: TestMode;
  selectedCategories: Category[];
}