import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-3 mb-6 animate-fade-in">
      <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 animate-pulse">
        <Bot className="w-4 h-4 text-white" />
      </div>
      
      <div className="max-w-xs sm:max-w-md lg:max-w-lg">
        <div className="px-4 py-3 rounded-2xl shadow-sm border backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/30">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;