import React from 'react';

const InteractiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300/20 to-purple-400/20 dark:from-yellow-400/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-yellow-400/20 dark:from-purple-400/10 dark:to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-200/10 to-purple-200/10 dark:from-yellow-300/5 dark:to-purple-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 dark:bg-yellow-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 dark:bg-purple-300/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-yellow-300/35 dark:bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300/30 dark:bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '4s', animationDuration: '3.5s' }}></div>
      
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-50/5 to-purple-50/5 dark:from-transparent dark:via-yellow-900/3 dark:to-purple-900/3"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/20 dark:to-gray-900/20"></div>
    </div>
  );
};

export default InteractiveBackground;