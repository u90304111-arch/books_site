import React from 'react';
import { ArrowRight, BookOpen, Star, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAboutClick }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Bookstore Library"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/90 to-[#090d16]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md animate-fade-in">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Kitob – yaxshi do‘st</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-serif">
              Kitob izlab <br className="hidden sm:inline" />
              <span className="gold-gradient-text">charchadingizmi?</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
              Endi vaqtingizni yo‘qotmang! Siz izlagan kitoblar bizda bor. Sevimli kitoblaringizni toping, ular haqida ma’lumot oling va yangi bilimlar sari qadam qo‘ying!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="gold-gradient-bg text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 text-base"
              >
                <span>Kitoblarni ko‘rish</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onAboutClick}
                className="glass-panel text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-base"
              >
                Biz haqimizda
              </button>
            </div>

            {/* Quick Benefits Pills */}
            <div className="grid grid-cols-3 gap-3 pt-8 border-t border-white/10 max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10+ Sara Asarlar</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Star className="w-4 h-4 text-amber-400 shrink-0" />
                <span>4.9 Yuqori Baho</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tez Yetkazib Berish</span>
              </div>
            </div>

          </div>

          {/* Right Visual Stack Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative Image Frame */}
              <div className="relative rounded-3xl p-2 glass-panel border border-amber-500/30 shadow-2xl overflow-hidden group">
                <img
                  src="/images/hero-book-stack.jpg"
                  alt="Kitoblar to'plami"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Animated Stack Titles overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-amber-500/20 space-y-1 backdrop-blur-md">
                  <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                    Eng ko'p o'qilganlar
                  </div>
                  <div className="text-white font-serif font-bold text-lg">
                    Atomic Habits • Rich Dad • Deep Work
                  </div>
                  <div className="text-xs text-gray-400">
                    O'zbek tilidagi eng sara audio va bosma nashrlar
                  </div>
                </div>
              </div>

              {/* Quote Card Badge Overlay */}
              <div className="absolute -top-6 -left-6 sm:-left-8 glass-card p-4 rounded-2xl border border-amber-400/30 shadow-2xl animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                    📚
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Bosh g'oya</p>
                    <p className="text-sm font-bold text-white font-serif">
                      Yaxshi kitob — yaxshi hayot
                    </p>
                  </div>
                </div>
              </div>

              {/* Glowing circle backdrops */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
