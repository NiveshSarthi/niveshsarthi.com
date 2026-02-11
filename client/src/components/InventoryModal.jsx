import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight } from 'lucide-react';
import axios from 'axios';

const InventoryModal = ({ isOpen, onClose, property }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    // Sample legacy images if property is missing
    const displayImage = property?.images?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";
    const displayName = property?.name || "The Imperial Heights";
    const displayLocation = property?.location || "Golf Course Road, Gurugram";
    const displayPrice = property?.price || "On Request";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            // Simplified lead capture for the modal
            await axios.post('http://localhost:5000/api/contacts', {
                name: "Newsletter/Lead",
                email: email,
                phone: "N/A",
                message: `Interest in: ${displayName}`,
                subject: "Inventory Modal Lead"
            });
            setStatus('success');
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[500px]"
                    >
                        {/* Left Side: Imagery */}
                        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                            <img
                                src={displayImage}
                                alt={displayName}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-2 block">Legacy Series</span>
                                <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-2">{displayName}</h3>
                                <p className="text-white/60 text-xs tracking-widest uppercase">{displayLocation}</p>
                            </div>
                        </div>

                        {/* Right Side: Branding & CTA */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-10 text-center md:text-left">
                                <h2 className="text-primary font-display tracking-[0.4em] uppercase text-xs font-bold mb-4">
                                    Exclusive Access
                                </h2>
                                <h4 className="text-3xl md:text-4xl text-white font-display leading-tight mb-6 uppercase tracking-tight">
                                    Some Build An Empire. <br />
                                    <span className="text-primary italic font-serif">Others Build A Legacy.</span>
                                </h4>
                                <p className="text-slate-400 font-serif italic text-base leading-relaxed mb-8 opacity-80">
                                    Be the first to explore our private collection of ultra-luxury residences and strategic commercial assets.
                                </p>
                            </div>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-6"
                                >
                                    <p className="text-primary font-bold tracking-widest uppercase text-sm">Welcome to the Club.</p>
                                    <p className="text-white/40 text-xs mt-2 uppercase tracking-tight">Redirecting you shortly...</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative group/email">
                                        <input
                                            type="email"
                                            placeholder="ENTER YOUR EMAIL FOR PRIVATE ACCESS"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 px-6 py-4 text-[10px] tracking-[0.2em] font-bold text-white uppercase outline-none focus:border-primary/50 transition-all duration-300 placeholder:text-slate-600"
                                        />
                                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within/email:w-full transition-all duration-500" />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-primary py-5 text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group/btn"
                                    >
                                        {status === 'loading' ? 'Encrypting Access...' : 'Initiate Private Access'}
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}

                            <div className="mt-12 text-center">
                                <p className="text-[9px] text-slate-700 tracking-[0.3em] uppercase leading-relaxed font-bold">
                                    Privacy Guaranteed | Exclusive Concierge | Direct Inquiries: +91 95600 31319
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default InventoryModal;
