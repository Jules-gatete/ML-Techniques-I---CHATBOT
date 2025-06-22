import React from 'react';
import { User, Bot } from 'lucide-react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex items-start space-x-3 mb-6 animate-fade-in ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 ${
        message.isUser 
          ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-400' 
          : 'bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500'
      }`}>
        {message.isUser ? (
          <User className="w-4 h-4 text-white dark:text-gray-900" />
        ) : (
          <Bot className="w-4 h-4 text-white" />
        )}
      </div>
      
      <div className={`max-w-xs sm:max-w-md lg:max-w-lg ${message.isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className={`px-4 py-3 rounded-2xl shadow-sm border backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
          message.isUser
            ? 'bg-yellow-50/80 dark:bg-yellow-900/20 border-yellow-200/50 dark:border-yellow-700/30 text-gray-800 dark:text-gray-200'
            : 'bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/30 text-gray-800 dark:text-gray-200'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-2">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;