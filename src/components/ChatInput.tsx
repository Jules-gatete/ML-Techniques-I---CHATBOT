import React, { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (trimmedInput && !disabled) {
      onSendMessage(trimmedInput);
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-4 shadow-lg relative z-10">
      <div className="flex items-end space-x-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about fitness, nutrition, or workouts..."
            disabled={disabled}
            rows={1}
            className="w-full px-4 py-3 pr-12 border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-700 dark:text-gray-200 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-400 backdrop-blur-sm"
            style={{ minHeight: '50px', maxHeight: '120px' }}
          />
        </div>
        
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 dark:from-yellow-300 dark:to-yellow-400 dark:hover:from-yellow-400 dark:hover:to-yellow-500 disabled:from-gray-200 disabled:to-gray-300 dark:disabled:from-gray-700 dark:disabled:to-gray-600 text-white dark:text-gray-900 p-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:transform-none disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-500 group"
        >
          <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;