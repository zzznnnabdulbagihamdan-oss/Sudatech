import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Send, X, Minimize2 } from 'lucide-react';
import { getAIResponseWithDelay, getRandomGreeting } from '../services/aiService';
import './AIAssistant.css';

export default function AIAssistant() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const greeting = getRandomGreeting(i18n.language);
      setMessages([{ type: 'ai', text: greeting }]);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getAIResponseWithDelay(userMessage, i18n.language);
      setMessages(prev => [...prev, { type: 'ai', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        text: i18n.language === 'ar' 
          ? 'عذراً، حدث خطأ. يرجى المحاولة لاحقاً.'
          : 'Sorry, an error occurred. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          className="ai-assistant-button"
          onClick={handleOpen}
          title={t('nav.contact')}
        >
          <MessageCircle size={24} />
          <span className="pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`ai-assistant-window ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <div className="header-content">
              <h3>🤖 Suda-AI</h3>
              <p className="status">متصل • Online</p>
            </div>
            <div className="header-actions">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="icon-btn"
              >
                <Minimize2 size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="icon-btn"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chat-messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`message ${msg.type}`}>
                    <div className="message-content">
                      {msg.type === 'ai' && <span className="ai-icon">🤖</span>}
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="message ai">
                    <div className="message-content">
                      <span className="ai-icon">🤖</span>
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="chat-input-form">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={i18n.language === 'ar' ? 'اكتب سؤالك...' : 'Type your question...'}
                  disabled={isLoading}
                  className="chat-input"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="send-button"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
