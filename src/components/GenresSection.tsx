import React from 'react';
import { GENRES } from '../data/books';
import { LayoutGrid, Briefcase, Brain, BookOpen, Target, TrendingUp } from 'lucide-react';

interface GenresSectionProps {
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}

export const GenresSection: React.FC<GenresSectionProps> = ({ selectedGenre, onSelectGenre }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Grid':
      default: return <LayoutGrid className="w-5 h-5" />;
    }
  };

  return (
    <section id="genres" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1">
              Kategoriyalar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Janrlar bo'yicha saralash
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            Sizga eng mos janrni tanlang va qiziqarli asarlarni kashf eting.
          </p>
        </div>

        {/* Genres Grid / Horizontal Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GENRES.map((genre) => {
            const isSelected = selectedGenre === genre.id;
            return (
              <button
                key={genre.id}
                onClick={() => onSelectGenre(genre.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 group text-center ${
                  isSelected
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-[1.03] font-bold'
                    : 'glass-card text-gray-300 border-white/10 hover:border-amber-500/40 hover:text-amber-300 hover:bg-white/5'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    isSelected
                      ? 'bg-slate-950/20 text-slate-950'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}
                >
                  {getIcon(genre.icon)}
                </div>
                <span className="text-sm tracking-tight font-medium">
                  {genre.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
