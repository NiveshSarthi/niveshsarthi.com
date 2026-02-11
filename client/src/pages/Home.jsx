import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Hero />

            {/* Philosophy Section */}
            <section className="py-32 bg-transparent border-y border-white/5 relative overflow-hidden" id="philosophy">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <span className="font-display text-[20rem] leading-none text-white vertical-text">NIVESH</span>
                </div>
                <div className="max-w-7xl mx-auto px-12 lg:px-24 grid lg:grid-cols-2 gap-24 items-center bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-8 block font-bold"
                        >
                            Our Philosophy
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-display text-white leading-tight mb-10 uppercase"
                        >
                            Architects of <span className="text-primary italic">Luminous</span> Living
                        </motion.h2>
                        <p className="text-slate-400 font-serif text-xl leading-relaxed mb-12 italic">
                            "At Nivesh Sarthi, we don't just build structures; we sculpt environments that elevate the human spirit. Every corner is a testament to our commitment to timeless elegance and engineering perfection."
                        </p>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                            <div className="border-l border-primary/30 pl-6">
                                <h4 className="font-display text-primary text-sm tracking-widest uppercase mb-3 font-bold">Visionary</h4>
                                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-bold">Anticipating the future of luxury and lifestyle trends.</p>
                            </div>
                            <div className="border-l border-primary/30 pl-6">
                                <h4 className="font-display text-primary text-sm tracking-widest uppercase mb-3 font-bold">Integrity</h4>
                                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-bold">Unwavering commitment to quality and transparency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] overflow-hidden">
                            <img
                                alt="Detail Architectural Shot"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-KG8AQ_yxeB4TAB2fCeZFEcfOCIeL33tQ6uSBC1GJ90EnU30IuNlBOVTP6bxViY2MEXILlh2BXe2WKyoGA2WZWKuOLW9Xu-yDlwnewzy4fnvbSKFwWprKOWgSgKhBRKRBxby-c7Qaas8nhduVgG6okSHY_GoxSP8nMqzVTHTiYF375CrA4O8_r6CmccbSjLOc2QM5IQDO0pzzuy1EN5XNXI-9Qct7_Dn6_s5vTOsnao4SlnliX5VBqlVWS9trt21t87ZXU2LbpgV"
                            />
                        </div>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute -bottom-10 -left-10 bg-primary p-12 text-white shadow-2xl"
                        >
                            <div className="font-display text-6xl mb-2">25+</div>
                            <div className="text-[10px] tracking-[0.3em] uppercase font-bold">Iconic Landmarks Delivered</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FeaturedProperties />
            <ContactForm />
        </main>
    );
};

export default Home;
