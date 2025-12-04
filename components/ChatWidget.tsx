import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am the Cloud Smart Assistant. How can I help you optimize your infrastructure today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I apologize, but I'm having trouble connecting to the server right now. Please try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-white/20 rounded-full">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Smart Assistant</h3>
                  <p className="text-xs text-blue-100 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-slate-200' : 'bg-blue-100'
                  }`}>
                    {msg.role === 'user' ? <User className="h-5 w-5 text-slate-600" /> : <Bot className="h-5 w-5 text-blue-600" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loadingState === LoadingState.LOADING && (
                <div className="flex items-start gap-2.5">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form onSubmit={handleSendMessage} className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about cloud solutions..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || loadingState === LoadingState.LOADING}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[10px] text-slate-400">Powered by Gemini AI • Cloud Smart Service</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;