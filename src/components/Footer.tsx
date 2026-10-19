import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Send, Share2, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#060a12] border-t border-white/10 pt-16 pb-8 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-serif">
                  KITOB <span className="gold-gradient-text">OLAMI</span>
                </span>
                <span className="block text-[10px] text-amber-200/60 uppercase tracking-widest font-medium">
                  Bilim – eng katta boylik
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Kitob Olami – O'zbekistondagi eng premium va sifatli elektron kitoblar do'koni. Siz izlagan eng yaxshi va sara asarlar bizda jamlangan.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://kitobolami.uz"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                aria-label="Veb-sayt"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Tezkor Havolalar
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Bosh sahifa</a></li>
              <li><a href="#books" className="hover:text-amber-400 transition-colors">Kitoblar</a></li>
              <li><a href="#genres" className="hover:text-amber-400 transition-colors">Janrlar</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Biz haqimizda</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Aloqa</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Bog'lanish
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+998 90 123 45 67</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@kitobolami.uz</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2025 Kitob Olami. Barcha huquqlar himoyalangan.</p>
          <p className="text-gray-400">
            Dizayn & Ishlab chiqish: <span className="text-amber-400 font-semibold">Premium Senior Dev</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
