import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenProfile: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
  onOpenProfile,
  activeNav,
  setActiveNav
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Bosh sahifa', href: '#home' },
    { id: 'books', label: 'Kitoblar', href: '#books' },
    { id: 'genres', label: 'Janrlar', href: '#genres' },
    { id: 'about', label: 'Biz haqimizda', href: '#about' },
    { id: 'contact', label: 'Aloqa', href: '#contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-2xl border-b border-amber-500/20'
          : 'bg-gradient-to-b from-[#090d16]/90 via-[#090d16]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', '#home');
            }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 transform group-hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider text-white flex items-center gap-1 font-serif">
                KITOB <span className="gold-gradient-text">OLAMI</span> 📚
              </span>
              <span className="block text-[10px] text-amber-200/60 uppercase tracking-widest font-medium">
                Bilim – eng katta boylik
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeNav === item.id
                    ? 'bg-amber-500 text-slate-950 shadow-md font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            
            {/* Quick Live Search Input */}
            <div className="relative hidden lg:block w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Kitob nomi yoki muallif..."
                className="w-full bg-slate-900/80 border border-white/15 rounded-full py-1.5 pl-9 pr-4 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Savatcha"
              className="relative p-2.5 rounded-full bg-slate-900/80 border border-white/15 text-gray-200 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile Button */}
            <button
              onClick={onOpenProfile}
              aria-label="Profil"
              className="p-2.5 rounded-full bg-slate-900/80 border border-white/15 text-gray-200 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-gray-200 md:hidden hover:text-amber-400"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Mobile/Tablet */}
        <div className="mt-3 lg:hidden pt-2 border-t border-white/5">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kitob nomi yoki muallif bo'yicha qidiruv..."
              className="w-full bg-slate-900/90 border border-white/15 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id, item.href);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeNav === item.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
