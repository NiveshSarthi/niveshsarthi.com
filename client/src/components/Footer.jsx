import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/SNS.png';

const Footer = () => {
    const socialLinks = [
        { Icon: Instagram, href: "https://www.instagram.com/niveshsarthi_/", label: "Instagram" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/nivesh-sarthi", label: "LinkedIn" },
        { Icon: Facebook, href: "https://www.facebook.com/niveshsarthii", label: "Facebook" },
        { Icon: Twitter, href: "https://twitter.com/niveshsarthi", label: "Twitter" }
    ];

    return (
        <footer className="bg-background-dark/80 backdrop-blur-md text-white pt-24 pb-12 px-8 lg:px-24 border-t border-white/5" id="contact">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-2">
                        <Link to="/" className="mb-10 block">
                            <img src={logo} alt="Nivesh Sarthi" className="h-24 lg:h-32 w-auto drop-shadow-[0_0_15px_rgba(197,160,89,0.2)]" />
                        </Link>
                        <p className="text-slate-400 max-w-md font-serif italic text-lg mb-10 leading-relaxed">
                            The definitive name in high-end real estate. Our mission is to create spaces that serve as a canvas for a life well-lived, merging global standards with local heritage.
                        </p>
                        <div className="flex gap-6">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                                    aria-label={label}
                                >
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-10">Navigation</h5>
                        <ul className="space-y-6 text-[11px] tracking-[0.2em] uppercase text-slate-400 font-medium">
                            <li><Link to="/properties" className="hover:text-white transition-colors">The Collection</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Investor Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-10">Contact</h5>
                        <div className="space-y-8">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Corporate HQ</p>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    628~630, 6th Floor, Puri 81 Business Hub,<br />
                                    Sector 81, Faridabad
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Luxe Concierge</p>
                                <p className="text-sm text-slate-300 flex items-center gap-2">
                                    <Phone size={14} className="text-primary" />
                                    <a href="tel:+919560031319" className="hover:text-primary transition-colors">+91 95600 31319</a>
                                </p>
                                <p className="text-sm text-slate-300 flex items-center gap-2 underline underline-offset-4 decoration-primary/30">
                                    <Mail size={14} className="text-primary" />
                                    <a href="mailto:info.niveshsarthi@gmail.com" className="hover:text-white transition-colors">info.niveshsarthi@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-medium">
                        © 2024 Nivesh Sarthi Premium Homes. RERA Reg. No: HARERA/GGM/2024/782
                    </div>
                    <div className="flex gap-8 text-[10px] tracking-[0.3em] text-slate-500 uppercase font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
