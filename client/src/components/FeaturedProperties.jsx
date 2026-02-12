import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { API_URL } from '../config';

const FeaturedProperties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get(`${API_URL}/properties`);
                setProperties(res.data.filter(p => p.featured));
            } catch (err) {
                console.error('Error fetching properties:', err);
            }
        };
        fetchProperties();
    }, []);

    return (
        <section className="py-32 px-8 lg:px-24 bg-transparent" id="featured">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-6 block font-bold"
                        >
                            Curated Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display text-white leading-tight"
                        >
                            Featured Properties
                        </motion.h2>
                    </div>
                    <motion.a
                        href="#"
                        className="mt-8 md:mt-0 text-[10px] tracking-[0.3em] uppercase text-primary border-b border-primary/30 pb-2 hover:border-primary transition-all font-bold"
                    >
                        View All Residences
                    </motion.a>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {properties.map((property, idx) => (
                        <motion.div
                            key={property._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="group cursor-pointer glass-panel p-6 rounded-3xl"
                        >
                            <div className="relative overflow-hidden aspect-[16/10] mb-8">
                                <img
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={property.images[0]}
                                />
                                <div className="absolute top-6 left-6 bg-charcoal/80 backdrop-blur-md px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/20 font-bold">
                                    {property.type === 'Residential' ? 'Ultra Luxury' : 'Signature Series'}
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display text-white mb-2 tracking-wide group-hover:text-primary transition-colors uppercase">
                                        {property.title}
                                    </h3>
                                    <p className="text-slate-500 text-[10px] tracking-widest uppercase font-bold">
                                        {property.location}
                                    </p>
                                </div>
                                <div className="group-hover:translate-x-3 transition-transform duration-500">
                                    <ArrowRight size={32} className="text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
