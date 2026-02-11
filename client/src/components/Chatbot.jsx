import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Welcome to Nivesh Sarthi. I am your AI concierge. How may I assist you with our luxury portfolio today?' }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    const siteKnowledge = {
        "founder": "Nivesh Sarthi was founded by Mr. Rahul Kushwaha, a visionary who started his journey 10 years ago as a freelancer in real estate.",
        "co-founder": "Mr. Rakesh Kushwaha is the co-founder and the strategic pillar of sales and operations at Nivesh Sarthi.",
        "mission": "Our mission is to redefine luxury living through architectural brilliance and uncompromising integrity.",
        "properties": "We offer ultra-luxury residential suites like The Sovereign Suites and prime commercial landmarks like Empire Estate.",
        "location": "Our corporate headquarters are located at Level 88, The Marquee Tower, Golf Course Extension, Gurugram.",
        "contact": "You can reach our concierge at 1800-SARTHI-LUXE or email us at concierge@niveshsarthi.com.",
        "projects": "Our major projects include The Sovereign Suites, Empire Estate, and Azure Tower."
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);

        // Simple response logic
        setTimeout(() => {
            let botResponse = "I'm sorry, I don't have that information. Would you like to speak with our concierge?";
            const lowerInput = input.toLowerCase();

            if (lowerInput.includes('founder') || lowerInput.includes('rahul')) botResponse = siteKnowledge.founder;
            else if (lowerInput.includes('rakesh') || lowerInput.includes('co-founder')) botResponse = siteKnowledge["co-founder"];
            else if (lowerInput.includes('property') || lowerInput.includes('project') || lowerInput.includes('buy')) botResponse = siteKnowledge.properties;
            else if (lowerInput.includes('contact') || lowerInput.includes('call') || lowerInput.includes('email')) botResponse = siteKnowledge.contact;
            else if (lowerInput.includes('where') || lowerInput.includes('located') || lowerInput.includes('office')) botResponse = siteKnowledge.location;

            setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
        }, 1000);

        setInput('');
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-6 w-[350px] bg-charcoal border border-primary/20 shadow-2xl overflow-hidden flex flex-col h-[450px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3 text-white">
                                <Bot size={20} />
                                <span className="text-[10px] tracking-[0.2em] font-bold uppercase">AI Concierge</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><X size={20} /></button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 flex flex-col scrollbar-hide">
                            {messages.map((m, i) => (
                                <div key={i} className={`max-w-[80%] p-3 rounded-sm text-xs leading-relaxed ${m.role === 'bot' ? 'bg-white/5 text-slate-300 self-start' : 'bg-primary text-white self-end'
                                    }`}>
                                    {m.content}
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/5 flex gap-2">
                            <input
                                type="text"
                                placeholder="Ask me anything..."
                                className="flex-1 bg-background-dark border border-white/10 p-2 text-[10px] text-white outline-none focus:border-primary font-bold"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button onClick={handleSend} className="bg-primary text-white p-2"><Send size={16} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(197,160,89,0.5)] hover:scale-110 transition-all duration-300"
            >
                <MessageCircle size={30} />
            </button>
        </div>
    );
};

export default Chatbot;
