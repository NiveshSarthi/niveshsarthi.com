import React from 'react';
import { motion } from 'framer-motion';
import rahul from '../assets/rahulsir.jpeg';
import rakesh from '../assets/Rakeshsir.jpeg';

const About = () => {
    return (
        <main className="pt-24 bg-transparent min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-end pb-24 px-8 lg:px-24">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Luxury Architectural Detail"
                        className="w-full h-full object-cover grayscale opacity-30"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcfI9UJBrht-qdKQxbVy1NCp6yZXr-VgI0lvxIZFSVHafb24H4fKjjapuqfm7LGav6qwZ1tUg-M1Tz4JxFRVTJq3FIlPdFTlZGMQraXQZkMX-xBikQTMcG4Fvya6XqOYkf6JrE3tek1MnjbHhMgRs2nPN6_0KONwDT3pinqn6y92fHzXkAVUQVcc7SrQKW7Ug1mVtxU2y5aAWUVbiPWcraC_gVWEGrizoc1AFG_glkw6xp1OM8WsZGosnxwvL1voLxYWSB1XkEbHn"
                    />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>
                <div className="relative z-10 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-display tracking-[0.4em] uppercase text-sm mb-4 block font-bold"
                    >
                        The Legacy
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl text-white tracking-tight mb-6 uppercase"
                    >
                        Architects of <span className="italic font-serif text-primary">Ambition</span>
                    </motion.h1>
                    <p className="font-serif italic text-white/70 text-xl max-w-2xl leading-relaxed">
                        From a single vision to a skyline transformed. Discover the journey of the brothers who redefined luxury real estate.
                    </p>
                </div>
            </section>

            {/* Founder - Rahul Kushwaha */}
            <section className="py-32 px-8 lg:px-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 border border-primary/30 translate-x-4 translate-y-4 -z-10"></div>
                            <img
                                alt="Mr. Rahul Kushwaha"
                                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src={rahul}
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                                <h3 className="font-display text-2xl text-white tracking-widest uppercase font-bold">RAHUL KUSHWAHA</h3>
                                <p className="text-primary font-serif italic text-lg">The Visionary Founder</p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <span className="text-primary font-display tracking-widest text-xs uppercase font-bold">Founder's Narrative</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight uppercase">A Decade of <br /><span className="text-primary italic">Defying Gravity</span></h2>
                        <div className="font-serif text-slate-300 text-lg space-y-6 leading-relaxed">
                            <p>
                                Every empire starts with a single brick, but Rahul Kushwaha's journey began with something far more intangible: a relentless pursuit of excellence. Ten years ago, armed with nothing but a vision and an unyielding work ethic,Rahul stepped into the real estate arena as a freelancer.
                            </p>
                            <p>
                                His early days were marked by a keen eye for untapped potential in urban landscapes. While others saw empty plots, Rahul saw sanctuaries of glass and stone. His transition from an independent consultant to a real estate mogul wasn't overnight; it was forged in the fire of meticulous planning and a refusal to accept mediocrity.
                            </p>
                            <p>
                                Under his leadership, Nivesh Sarthi evolved from a boutique agency into a powerhouse developer. His philosophy remains unchanged: "We don't just build structures; we curate lifestyles that serve as a testament to human achievement."
                            </p>
                        </div>
                        <div className="flex gap-12 py-8 border-y border-white/10">
                            <div>
                                <span className="block text-3xl font-display text-primary font-bold">10+</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-display text-primary font-bold">500+</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Premium Units</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Co-Founder - Rakesh Kushwaha */}
            <section className="py-32 px-8 lg:px-24 bg-charcoal/50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-7 order-2 lg:order-1 space-y-8"
                    >
                        <span className="text-primary font-display tracking-widest text-xs uppercase font-bold">Strategic Leadership</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight uppercase">The Precision of <br /><span className="text-primary italic">Strategic Growth</span></h2>
                        <div className="font-serif text-slate-300 text-lg space-y-6 leading-relaxed">
                            <p>
                                If Rahul is the visionary soul of Nivesh Sarthi, Rakesh Kushwaha is its iron-clad backbone. As the Strategic Pillar, Rakesh oversees the complex machinery of sales, operations, and client relations that turns architectural dreams into commercial realities.
                            </p>
                            <p>
                                With a background in high-stakes operations, Rakesh joined forces with his brother to institutionalize the brand's growth. He has been instrumental in building a sales ecosystem that treats real estate not as a transaction, but as a long-term wealth partnership.
                            </p>
                            <p>
                                His operational mastery ensures that the promise of luxury is delivered on time, every time, without compromise.
                            </p>
                        </div>
                    </motion.div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="relative"
                        >
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/50"></div>
                            <img
                                alt="Mr. Rakesh Kushwaha"
                                className="w-full aspect-[4/5] object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                                src={rakesh}
                            />
                            <div className="absolute -bottom-4 -left-4 bg-primary p-8 shadow-2xl">
                                <h3 className="font-display text-xl text-white font-bold uppercase">RAKESH KUSHWAHA</h3>
                                <p className="text-white/80 text-[10px] tracking-widest uppercase mt-1 font-bold">Strategic Pillar & Co-Founder</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
