import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Search, Filter, Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { API_URL } from '../config';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get(`${API_URL}/properties`);
                setProperties(res.data);
            } catch (err) {
                console.error('Error fetching properties:', err);
            }
        };
        fetchProperties();
    }, []);

    const filteredProperties = filter === 'All'
        ? properties
        : properties.filter(p => p.type === filter);

    return (
        <main className="pt-32 bg-transparent min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-8 lg:px-24 bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10">
                <header className="mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-4 block font-bold"
                    >
                        Our Portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display text-white mb-10 uppercase"
                    >
                        Exclusive <span className="text-primary italic">Residences</span>
                    </motion.h1>

                    <div className="flex flex-wrap items-center gap-8 border-y border-white/5 py-8">
                        {['All', 'Residential', 'Commercial'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all ${filter === type ? 'text-primary' : 'text-slate-500 hover:text-white'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredProperties.map((property, idx) => (
                        <motion.div
                            key={property._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-charcoal border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md px-3 py-1 text-[9px] tracking-[0.2em] uppercase text-primary border border-primary/20 font-bold">
                                    {property.status}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-primary mb-3">
                                    <MapPin size={12} />
                                    <span className="text-[10px] tracking-widest uppercase font-bold">{property.location}</span>
                                </div>
                                <h3 className="text-xl font-display text-white mb-4 group-hover:text-primary transition-colors uppercase font-bold">
                                    {property.title}
                                </h3>
                                <p className="text-slate-400 text-sm font-serif italic mb-6 line-clamp-2">
                                    {property.description}
                                </p>
                                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mb-6">
                                    <div className="flex flex-col items-center gap-1">
                                        <Bed size={14} className="text-slate-500" />
                                        <span className="text-[10px] text-white font-bold">{property.details.bedrooms} BHK</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Bath size={14} className="text-slate-500" />
                                        <span className="text-[10px] text-white font-bold">{property.details.bathrooms} Bath</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Maximize size={14} className="text-slate-500" />
                                        <span className="text-[10px] text-white font-bold">{property.details.area}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-display text-lg font-bold">{property.price}</span>
                                    <button className="text-[9px] tracking-[0.3em] uppercase text-white font-bold hover:text-primary transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Properties;
