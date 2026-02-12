import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <main className="pt-24 bg-transparent min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-8 lg:px-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 h-full w-full">
                    <div className="absolute inset-0 bg-[#050505]/90 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact-Hero"
                        className="w-full h-full object-cover grayscale opacity-20"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-display tracking-[0.4em] uppercase text-sm mb-4 block font-bold"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl text-white tracking-tight mb-8 uppercase"
                    >
                        Connect With <span className="italic font-serif text-primary">Excellence</span>
                    </motion.h1>
                    <p className="font-serif italic text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking for your next investment or your dream home, our concierge team is here to guide you through the Nivesh Sarthi experience.
                    </p>
                </div>
            </section>

            {/* Contact Content with Premium Background */}
            <section className="py-32 px-8 lg:px-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05)_0%,transparent_70%)]"></div>
                <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto mb-32"
                    >
                        <ContactForm isPage={true} />
                    </motion.div>
                </div>
            </section>

            {/* Our Presence - Now Horizontal below Form */}
            <section className="py-24 px-8 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-16"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-display text-white mb-6 uppercase tracking-widest">Our <span className="text-primary italic">Presence</span></h2>
                        <p className="text-slate-400 font-serif text-lg leading-relaxed">
                            Visit our corporate headquarters or reach out through our dedicated concierge lines.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Address Card */}
                        <div className="bg-white/5 border border-white/5 p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                                <MapPin className="text-primary group-hover:text-white" size={24} />
                            </div>
                            <h4 className="text-white font-display text-xs tracking-widest uppercase mb-4 font-bold">Corporate HQ</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-serif">
                                628~630, 6th Floor, Puri 81 Business Hub,<br />
                                Sector 81, Faridabad, Haryana
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white/5 border border-white/5 p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                                <Phone className="text-primary group-hover:text-white" size={24} />
                            </div>
                            <h4 className="text-white font-display text-xs tracking-widest uppercase mb-4 font-bold">Luxe Concierge</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-serif">
                                +91 95600 31319
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white/5 border border-white/5 p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                                <Mail className="text-primary group-hover:text-white" size={24} />
                            </div>
                            <h4 className="text-white font-display text-xs tracking-widest uppercase mb-4 font-bold">Electronic Mail</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-serif">
                                info.niveshsarthi@gmail.com
                            </p>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-white/5 border border-white/5 p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                                <Clock className="text-primary group-hover:text-white" size={24} />
                            </div>
                            <h4 className="text-white font-display text-xs tracking-widest uppercase mb-4 font-bold">Visiting Hours</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-serif">
                                Tue - Sun: 10AM - 6PM<br />
                                Sunday: Appointment Only
                            </p>
                        </div>
                    </div>

                </motion.div>
            </section>
        </main>
    );
};

export default Contact;
