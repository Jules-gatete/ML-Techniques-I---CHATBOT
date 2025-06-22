import React from 'react';
import { Dumbbell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-4 shadow-sm relative z-10">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-400 p-2.5 rounded-2xl shadow-lg">
            <Dumbbell className="w-6 h-6 text-white dark:text-gray-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-purple-600 dark:text-purple-400 tracking-tight">
              FitCoachBot
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Your Personal Fitness Assistant
            </p>
          </div>
        </div>
        
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md group"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" />
          ) : (
            <Moon className="w-5 h-5 text-purple-600 group-hover:-rotate-12 transition-transform duration-200" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;