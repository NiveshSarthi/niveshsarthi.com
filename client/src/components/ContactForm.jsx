import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = ({ isPage = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        budget: '',
        propertyType: '',
        location: '',
        referral: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/contacts', formData);
            setStatus('success');
            setFormData({
                name: '', email: '', phone: '', subject: '',
                budget: '', propertyType: '', location: '', referral: '',
                message: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    const FormContent = () => (
        <div className={`grid ${isPage ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-16 md:gap-24 items-center`}>
            {!isPage && (
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-8 block font-bold"
                    >
                        Inquiry
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display text-white leading-tight mb-10"
                    >
                        Connect with our <span className="text-primary italic">Private</span> Concierge
                    </motion.h2>
                    <p className="text-slate-400 font-serif text-lg leading-relaxed mb-12 italic">
                        "Whether you are seeking a generational legacy home or a strategic commercial investment, our team of experts is ready to curate a bespoke experience tailored to your aspirations."
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="border-l border-primary/30 pl-6">
                            <h4 className="font-display text-primary text-sm tracking-widest uppercase mb-2 font-bold">Personalized</h4>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Tailored property search based on your lifestyle.</p>
                        </div>
                        <div className="border-l border-primary/30 pl-6">
                            <h4 className="font-display text-primary text-sm tracking-widest uppercase mb-2 font-bold">Confidential</h4>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Ensuring complete privacy in every transaction.</p>
                        </div>
                    </div>
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`${!isPage ? 'bg-charcoal/40 backdrop-blur-xl border border-white/10' : ''} p-2 md:p-8 relative overflow-hidden group/form`}
            >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover/form:bg-primary/10 transition-colors duration-700"></div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                            <CheckCircle size={40} className="text-primary animate-pulse" />
                        </div>
                        <h3 className="text-3xl font-display text-white mb-4 tracking-tight uppercase">Inquiry Successful</h3>
                        <p className="text-slate-400 font-serif italic text-lg max-w-sm mx-auto">Our luxury concierge team will reach out to you with unparalleled priority.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-12">
                        {isPage && (
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-4 tracking-tight uppercase">Connect with <span className="text-primary italic">Our Private Concierge</span></h2>
                                <p className="text-slate-400 font-serif text-lg italic max-w-2xl mx-auto opacity-70">Curating bespoke real estate experiences with discretion and excellence.</p>
                            </div>
                        )}

                        {/* Row 1: Basic Info */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                        </div>

                        {/* Row 2: Phone & Subject */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 0000 000 000"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Consultation"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                        </div>

                        {/* Row 3: Qualification (Budget & Property Type) */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Expected Investment Range (Budget)</label>
                                <select
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium appearance-none"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="" disabled className="bg-charcoal text-slate-500">Select Budget Range</option>
                                    <option value="Under 5 Cr" className="bg-charcoal">Under ₹5 Cr</option>
                                    <option value="5 - 10 Cr" className="bg-charcoal">₹5 Cr - ₹10 Cr</option>
                                    <option value="10 - 25 Cr" className="bg-charcoal">₹10 Cr - ₹25 Cr</option>
                                    <option value="Above 25 Cr" className="bg-charcoal">₹25 Cr +</option>
                                </select>
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Property Type Preference</label>
                                <select
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium appearance-none"
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                >
                                    <option value="" disabled className="bg-charcoal text-slate-500">Select Property Type</option>
                                    <option value="Ultra Luxury Villa" className="bg-charcoal">Ultra Luxury Villa</option>
                                    <option value="Premium Penthouse" className="bg-charcoal">Premium Penthouse</option>
                                    <option value="Strategic Commercial" className="bg-charcoal">Strategic Commercial</option>
                                    <option value="Bespoke Plots" className="bg-charcoal">Bespoke Plots</option>
                                </select>
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                        </div>

                        {/* Row 4: Location & Source */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Preferred Location / Region</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Golf Course Road, Gurugram"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                            <div className="relative group/input">
                                <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">How did you discover us?</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Instagram, Referral, Google"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800"
                                    value={formData.referral}
                                    onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                                />
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                            </div>
                        </div>

                        <div className="relative group/input">
                            <label className="text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mb-1 block group-focus-within/input:text-primary transition-all duration-300">Tell Us Your Vision / Message</label>
                            <textarea
                                rows="4"
                                placeholder="How can we assist you?"
                                className="w-full bg-transparent border-b border-white/5 py-4 text-xs tracking-widest uppercase text-white outline-none focus:border-primary/50 transition-all duration-500 font-medium placeholder:text-slate-800 resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-6 group/btn relative overflow-hidden flex items-center justify-center gap-4 transition-all duration-700"
                        >
                            <div className="absolute inset-0 bg-primary group-hover/btn:bg-white transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>

                            <span className="relative z-10 text-white group-hover/btn:text-black font-bold tracking-[0.5em] uppercase text-xs transition-colors duration-500">
                                {status === 'loading' ? 'Processing...' : 'Initiate Private Consultation'}
                            </span>
                            <Send size={16} className="relative z-10 text-white group-hover/btn:text-black transition-all duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );

    if (isPage) {
        return <FormContent />;
    }

    return (
        <section className="py-32 px-8 lg:px-24 bg-transparent border-t border-white/5" id="contact-form">
            <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10">
                <FormContent />
            </div>
        </section>
    );
};

export default ContactForm;
