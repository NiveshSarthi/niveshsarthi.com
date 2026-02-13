import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/SNS.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 lg:px-20 flex items-center justify-between border-b ${isScrolled ? 'bg-background-dark/80 backdrop-blur-md py-4 border-white/10' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Nivesh Sarthi" className="h-16 lg:h-24 w-auto drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]" />
                </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <Link to="/testimonials" className="nav-link">What People Say</Link>
                <Link to="/properties" className="nav-link">Properties</Link>
                <Link
                    to="/contact"
                    className="nav-link border border-primary/40 px-6 py-2 hover:bg-primary hover:text-white transition-all"
                >
                    Contact Us
                </Link>
            </nav>

            <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-charcoal border-b border-white/10 p-8 flex flex-col gap-6 lg:hidden">
                    <Link to="/" className="nav-link text-center" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="nav-link text-center" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/testimonials" className="nav-link text-center" onClick={() => setIsMenuOpen(false)}>What People Say</Link>
                    <Link to="/properties" className="nav-link text-center" onClick={() => setIsMenuOpen(false)}>Properties</Link>
                    <Link
                        to="/contact"
                        className="border border-primary/40 px-6 py-3 text-primary text-center tracking-[0.3em] uppercase text-xs"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
