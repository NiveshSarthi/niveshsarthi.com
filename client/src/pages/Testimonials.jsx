import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Malhotra",
        role: "Luxury Homeowner",
        title: "A Masterpiece of Convenience",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1566433316213-c8e515961db4?q=80&w=1974&auto=format&fit=crop",
        quote: "Nivesh Sarthi's attention to detail is simply unparalleled in the Indian market."
    },
    {
        name: "Ananya Sharma",
        role: "Commercial Investor",
        title: "Strategic Growth Partner",
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        quote: "They don't just sell property; they understand the long-term vision of wealth creation."
    },
    {
        name: "Vikram Singhania",
        role: "Entrepreneur",
        title: "The Gold Standard",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        quote: "From the first inquiry to the handover, the experience was seamless and sophisticated."
    },
    {
        name: "Priya Iyer",
        role: "Interior Designer",
        title: "Architectural Brilliance",
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        quote: "As a designer, I appreciate the craftsmanship that Nivesh Sarthi brings to every project."
    },
    {
        name: "Amitabh Mehra",
        role: "NRI Investor",
        title: "Trust Transcending Borders",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        quote: "Their transparency made it easy for me to invest with confidence from halfway across the world."
    },
    {
        name: "Sunita Gupta",
        role: "Philanthropist",
        title: "More Than Just a House",
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
        quote: "They truly understand that a luxury home should be a reflection of one's journey and achievements."
    }
];

const TestimonialCard = ({ testimonial }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="group relative"
    >
        <div className="relative aspect-video overflow-hidden rounded-sm bg-charcoal">
            <img
                src={testimonial.thumbnail}
                alt={testimonial.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                    <Play size={24} className="text-white fill-current ml-1" />
                </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-primary fill-current" />
                ))}
            </div>
        </div>

        <div className="mt-8 space-y-4">
            <Quote className="text-primary/40 -scale-x-100" size={24} />
            <h3 className="text-xl font-display text-white transition-colors duration-500 group-hover:text-primary uppercase tracking-wider">{testimonial.title}</h3>
            <p className="text-slate-400 font-serif italic text-lg leading-relaxed">{testimonial.quote}</p>
            <div className="pt-4 border-t border-white/5">
                <p className="text-white font-display text-xs tracking-widest uppercase font-bold">{testimonial.name}</p>
                <p className="text-primary font-serif text-[10px] uppercase tracking-[0.2em] mt-1">{testimonial.role}</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    return (
        <main className="pt-24 bg-transparent min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-8 lg:px-24 overflow-hidden border-b border-white/5">
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <span className="font-display text-[15rem] leading-none text-white vertical-text">VOICES</span>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-display tracking-[0.4em] uppercase text-sm mb-6 block font-bold"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-6xl md:text-8xl text-white tracking-tight mb-10 uppercase leading-none"
                    >
                        What People <span className="italic font-serif text-primary">Say</span>
                    </motion.h1>
                    <p className="font-serif italic text-white/70 text-2xl max-w-3xl mx-auto leading-relaxed">
                        Authentic experiences from our esteemed clients who have found their sanctuary and strategic success through Nivesh Sarthi.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-32 px-8 lg:px-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {testimonials.map((t, idx) => (
                        <TestimonialCard key={idx} testimonial={t} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-8 lg:px-24 bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-display text-white mb-8 uppercase tracking-wider">Join Our <span className="text-primary italic">Legacy</span></h2>
                    <p className="text-slate-400 font-serif text-xl mb-12">Your journey to extraordinary living begins with a single conversation. Experience the Nivesh Sarthi difference today.</p>
                    <a href="/contact" className="inline-block px-12 py-5 bg-primary text-white font-bold tracking-[0.4em] uppercase text-xs hover:bg-white hover:text-black transition-all">
                        Let's Begin Your Narrative
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
