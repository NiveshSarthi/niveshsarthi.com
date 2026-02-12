import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Send, CheckCircle } from 'lucide-react';
import { API_URL } from '../config';

const FormContent = ({ isPage, formData, setFormData, status, handleSubmit }) => (
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
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="EX: MAHARAJA SINGH"
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="YOUR@LEGACY.COM"
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Phone & Subject */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Phone Number</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="+91 0000 000 000"
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Subject / Inquiry Type</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="EX: PRIVATE CONSULTATION"
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Qualification (Budget & Property Type) */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Expected Investment Range</label>
                            <div className="relative">
                                <select
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium appearance-none cursor-pointer"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="" disabled className="bg-charcoal text-slate-500">SELECT BUDGET RANGE</option>
                                    <option value="Under 5 Cr" className="bg-charcoal">UNDER ₹5 CR</option>
                                    <option value="5 - 10 Cr" className="bg-charcoal">₹5 CR - ₹10 CR</option>
                                    <option value="10 - 25 Cr" className="bg-charcoal">₹10 CR - ₹25 CR</option>
                                    <option value="Above 25 Cr" className="bg-charcoal">₹25 CR +</option>
                                </select>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Property Type Preference</label>
                            <div className="relative">
                                <select
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium appearance-none cursor-pointer"
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                >
                                    <option value="" disabled className="bg-charcoal text-slate-500">SELECT PROPERTY TYPE</option>
                                    <option value="Ultra Luxury Villa" className="bg-charcoal">ULTRA LUXURY VILLA</option>
                                    <option value="Premium Penthouse" className="bg-charcoal">PREMIUM PENTHOUSE</option>
                                    <option value="Strategic Commercial" className="bg-charcoal">STRATEGIC COMMERCIAL</option>
                                    <option value="Bespoke Plots" className="bg-charcoal">BESPOKE PLOTS</option>
                                </select>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Location & Source */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Preferred Location / Region</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="E.G., GOLF COURSE ROAD, GURUGRAM"
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                        <div className="relative group/input">
                            <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">How did you discover us?</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="E.G., INSTAGRAM, REFERRAL, GOOGLE"
                                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600"
                                    value={formData.referral}
                                    onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group/input">
                        <label className="text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-3 block group-focus-within/input:text-white transition-all duration-300">Tell Us Your Vision / Message</label>
                        <div className="relative">
                            <textarea
                                rows="4"
                                placeholder="HOW CAN WE ASSIST IN CURATING YOUR LEGACY?"
                                className="w-full bg-white/[0.03] border border-white/10 px-6 py-6 text-[11px] tracking-widest uppercase text-white outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-500 font-medium placeholder:text-slate-600 resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/input:w-full transition-all duration-1000"></div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-7 group/btn relative overflow-hidden flex items-center justify-center gap-4 transition-all duration-700 shadow-[0_10px_30px_rgba(197,160,89,0.1)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.2)]"
                    >
                        <div className="absolute inset-0 bg-primary group-hover/btn:bg-white transition-colors duration-500"></div>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>

                        <span className="relative z-10 text-white group-hover/btn:text-black font-bold tracking-[0.4em] uppercase text-xs transition-colors duration-500">
                            {status === 'loading' ? 'TRANSMITTING INQUIRY...' : 'INITIATE PRIVATE CONSULTATION'}
                        </span>
                        <Send size={16} className="relative z-10 text-white group-hover/btn:text-black transition-all duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </button>
                </form>
            )}
        </motion.div>
    </div>
);

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
            await axios.post(`${API_URL}/contacts`, formData);
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

    if (isPage) {
        return <FormContent isPage={isPage} formData={formData} setFormData={setFormData} status={status} handleSubmit={handleSubmit} />;
    }

    return (
        <section className="py-32 px-8 lg:px-24 bg-transparent border-t border-white/5" id="contact-form">
            <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10">
                <FormContent isPage={isPage} formData={formData} setFormData={setFormData} status={status} handleSubmit={handleSubmit} />
            </div>
        </section>
    );
};

export default ContactForm;
