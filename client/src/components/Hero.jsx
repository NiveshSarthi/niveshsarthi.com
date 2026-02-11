import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAcfI9UJBrht-qdKQxbVy1NCp6yZXr-VgI0lvxIZFSVHafb24H4fKjjapuqfm7LGav6qwZ1tUg-M1Tz4JxFRVTJq3FIlPdFTlZGMQraXQZkMX-xBikQTMcG4Fvya6XqOYkf6JrE3tek1MnjbHhMgRs2nPN6_0KONwDT3pinqn6y92fHzXkAVeUQVcc7SrQKW7Ug1mVtxU2y5aAWUVbiPWcraC_gVWEGrizoc1AFG_glkw6xp1OM8WsZGosnxwvL1voLxYWSB1XkEbHn"
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/3584-172488232_large.mp4" type="video/mp4" />
                    {/* Fallback image if video fails */}
                    <img
                        alt="Luxury Real Estate Background"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcfI9UJBrht-qdKQxbVy1NCp6yZXr-VgI0lv1ZFSVHafb24H4fKjjapuqfm7LGav6qwZ1tUg-M1Tz4JxFRVTJq3FIlPdFTlZGMQraXQZkMX-xBikQTMcG4Fvya6XqOYkf6JrE3tek1MnjbHhMgRs2nPN6_0KONwDT3pinqn6y92fHzXkAVeUQVcc7SrQKW7Ug1mVtxU2y5aAWUVbiPWcraC_gVWEGrizoc1AFG_glkw6xp1OM8WsZGosnxwvL1voLxYWSB1XkEbHn"
                    />
                </video>
                <div className="absolute inset-0 hero-gradient"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center items-center gap-4"
                >
                    <div className="h-[1px] w-12 bg-primary"></div>
                    <span className="text-primary font-display tracking-[0.5em] uppercase text-xs font-bold">Excellence in Every Detail</span>
                    <div className="h-[1px] w-12 bg-primary"></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-[10rem] text-white tracking-[0.15em] mb-10 leading-none"
                >
                    ESTATES
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-serif italic text-white/70 text-xl md:text-3xl mb-14 max-w-3xl mx-auto font-light"
                >
                    Crafting the future of ultra-luxury living through architectural brilliance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                >
                    <a href="#featured" className="group relative px-12 py-5 bg-primary text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                        <span className="relative z-10 font-bold tracking-[0.3em] uppercase text-xs">Explore Residences</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </a>

                    <a href="#" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                            <Play size={20} className="text-white group-hover:text-primary fill-white group-hover:fill-primary" />
                        </div>
                        <span className="font-bold tracking-[0.3em] uppercase text-xs text-white">View Showreel</span>
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <span className="text-white text-[9px] tracking-[0.5em] uppercase vertical-text mb-4 font-bold">Scroll to Discover</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
            </div>
        </section>
    );
};

export default Hero;
