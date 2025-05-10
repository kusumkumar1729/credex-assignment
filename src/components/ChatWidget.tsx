import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import '../index.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const predefinedResponses: Record<string, string> = {
  'hello': 'Hello! How can I help you today with SoftSell?',
  'hi': 'Hi there! How can I assist you with our software license resale platform?',
  'how do i sell my license': 'It\'s simple! Upload your license details, get an instant valuation based on market demand, and once approved, get paid within 48 hours.',
  'what is the pricing': 'SoftSell takes a small commission of 15% on successful sales. There are no upfront fees, and you only pay when your license sells.',
  'what payment methods are available': 'We support all major payment methods including bank transfers, PayPal, and most major credit cards.',
  'how long does it take': 'Most transactions complete within 48 hours, with funds deposited directly to your account.',
  'which licenses can i sell': 'We accept licenses from Microsoft, Adobe, Autodesk, and many other major software providers. Contact us for specific inquiries.',
  'is it secure': 'We use enterprise-grade encryption and secure payment processing. All license transfers follow legal requirements to ensure proper ownership transfer.',
};

const defaultResponses = [
  "I'm not sure I understand. Could you rephrase your question?",
  "That's a great question! Our team would be happy to provide more details. Would you like to contact us directly?",
  "Thanks for your interest! For this specific inquiry, it might be best to speak with our sales team. Would you like us to contact you?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! 👋 How can I help you with SoftSell today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showBuffer, setShowBuffer] = useState(false);
  const [botThinking, setBotThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized, showBuffer, botThinking]);

  const handleSendMessage = async (input: string = inputValue) => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowBuffer(true);
    setBotThinking(true);

    try {
      // Simulate typing dots for 800ms
      setTimeout(() => {
        setShowBuffer(false);
      }, 800);

      // Get bot response
      const botResponse = await getBotResponse(input);
      await new Promise(resolve => setTimeout(resolve, 2000));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, something went wrong. Please try again or contact support at info@softsell.com.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setShowBuffer(false);
      setBotThinking(false);
    }
  };

  const getBotResponse = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase();

    // Check for predefined responses
    for (const key in predefinedResponses) {
      if (lowerMessage.includes(key)) {
        return predefinedResponses[key];
      }
    }

    // Prepare prompt
    const prompt = `You are SoftSell Assistant, helping users with questions about selling unused software licenses. Provide a professional and helpful response to: "${message}". If unclear, suggest contacting support at info@softsell.com.`;

    // Attempt real Gemini API call if key exists
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey && apiKey !== 'YOUR_API_KEY') {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        return result.response.text();
      } catch (error) {
        console.error('Gemini API error, falling back to mock:', error);
        // Fallback to mock response
      }
    }

    // Mock response based on query
    let response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    if (lowerMessage.includes('sell')) {
      response = 'To sell your software licenses, upload your license details via our secure portal. You’ll get a valuation within 24 hours. For specific licenses, contact info@softsell.com.';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      response = 'Our commission is 15% on successful sales, with no upfront fees. Submit your license for a detailed valuation.';
    }

    return response;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handlePresetQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage(question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 softsell-chat">
      {!isOpen && (
        <button
          className="chat-button chat-toggle"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className={`chat-window ${isMinimized ? 'minimized' : 'full'} chat-window-enter`}>
          <div className="chat-header" onClick={isMinimized ? toggleChat : undefined}>
            <div className="header-title">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">SoftSell Support</h3>
            </div>
            <div className="header-buttons">
              <button
                className="header-button"
                onClick={toggleMinimize}
                aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                className="header-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          {!isMinimized && (
            <div className="chat-messages">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                >
                  <div className="message-content message-enter">
                    <p>{message.text}</p>
                    <div className="message-time">{formatTime(message.timestamp)}</div>
                  </div>
                </div>
              ))}
              {showBuffer && (
                <div className="typing-dots message-enter">Typing</div>
              )}
              {botThinking && !showBuffer && (
                <div className="dot-elastic-container message-enter">
                  <div className="dot-elastic">
                    <div className="dot-elastic-dot"></div>
                    <div className="dot-elastic-dot"></div>
                    <div className="dot-elastic-dot"></div>
                    <span className="text-muted-foreground ml-2">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
          )}
          {!isMinimized && (
            <div className="chat-input-container">
              <div className="preset-buttons">
                {[
                  'hello',
                  'hi',
                  'How do I sell my license?',
                  'What is the pricing?',
                  'What payment methods are available?',
                  'How long does it take?',
                  'Which licenses can I sell?',
                  'Is it secure?'
                ].map((question) => (
                  <button
                    key={question}
                    onClick={() => handlePresetQuestion(question)}
                    className="preset-button"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="input-field"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="send-button"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;