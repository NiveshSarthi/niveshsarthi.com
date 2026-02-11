import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 2500); // 2.5 seconds total
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
                >
                    {/* Atmospheric background */}
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.08)_0%,transparent_70%)]"
                    />

                    <div className="relative flex flex-col items-center">
                        {/* Logo Container */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative mb-8"
                        >
                            {/* Golden Glow behind logo */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
                            />

                            <img
                                src={logo}
                                alt="Nivesh Sarthi"
                                className="w-32 md:w-48 h-auto relative z-10 brightness-110 filter drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                            />
                        </motion.div>

                        {/* Title / Tagline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-center"
                        >
                            <h1 className="text-primary font-display tracking-[0.6em] uppercase text-xs md:text-sm font-bold mb-2">
                                Nivesh Sarthi
                            </h1>
                            <div className="h-[1px] w-12 bg-primary/30 mx-auto mb-4" />
                            <p className="text-white/40 font-serif italic text-[10px] md:text-xs tracking-widest uppercase">
                                Redefining Luxury Real Estate
                            </p>
                        </motion.div>

                        {/* Progress line */}
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/5 overflow-hidden">
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
