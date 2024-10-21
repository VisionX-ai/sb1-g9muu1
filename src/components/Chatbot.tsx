import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our team will get back to you soon.", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-electric-blue p-4 flex justify-between items-center">
        <h3 className="text-black font-semibold">AI Assistant</h3>
        <button onClick={onClose} className="text-black hover:text-gray-800">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="h-80 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-electric-blue text-black' : 'bg-gray-800 text-white'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-800">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-electric-blue text-black px-4 py-2 rounded-r-lg hover:bg-electric-blue-dark transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;