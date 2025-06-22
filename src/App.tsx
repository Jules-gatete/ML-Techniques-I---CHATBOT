import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import ChatInput from './components/ChatInput';
import InteractiveBackground from './components/InteractiveBackground';
import { Message, ChatState } from './types';
import { generateBotResponse } from './services/fitnessBot';

function AppContent() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: '1',
        text: "Hello! I'm FitCoachBot, your personal fitness assistant. I'm here to help you with workouts, nutrition, and wellness advice. What would you like to know today?",
        isUser: false,
        timestamp: new Date()
      }
    ],
    isTyping: false
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages, chatState.isTyping]);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    // Add user message
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true
    }));

    // Simulate typing delay
    setTimeout(async () => {
      const botResponse = await generateBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isTyping: false
      }));
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <InteractiveBackground />
      <Header />
      
      <div className="flex-1 overflow-hidden relative z-10">
        <div className="h-full overflow-y-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {chatState.messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            
            {chatState.isTyping && <TypingIndicator />}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      
      <ChatInput 
        onSendMessage={handleSendMessage}
        disabled={chatState.isTyping}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;