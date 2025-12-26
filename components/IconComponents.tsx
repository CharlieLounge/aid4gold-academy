
import React from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Moon, 
  Sun, 
  BookOpen, 
  Award, 
  BarChart, 
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Home,
  Bookmark,
  Settings,
  Info
} from 'lucide-react';

export const IconCheck = () => <CheckCircle className="w-6 h-6 text-green-500" />;
export const IconX = () => <XCircle className="w-6 h-6 text-red-500" />;
export const IconMoon = () => <Moon className="w-5 h-5" />;
export const IconSun = () => <Sun className="w-5 h-5" />;
export const IconBook = () => <BookOpen className="w-6 h-6" />;
export const IconAward = () => <Award className="w-6 h-6" />;
export const IconChart = () => <BarChart className="w-6 h-6" />;
export const IconArrowRight = () => <ChevronRight className="w-5 h-5" />;
export const IconArrowLeft = () => <ChevronLeft className="w-5 h-5" />;
export const IconRefresh = () => <RefreshCw className="w-5 h-5" />;
export const IconHome = () => <Home className="w-5 h-5" />;
export const IconBookmark = ({ filled }: { filled?: boolean }) => (
  <Bookmark className={`w-6 h-6 ${filled ? 'fill-current' : ''}`} />
);
export const IconSettings = () => <Settings className="w-5 h-5" />;
export const IconInfo = () => <Info className="w-5 h-5" />;
