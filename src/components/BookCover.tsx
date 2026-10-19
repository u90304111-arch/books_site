import React, { useState } from 'react';
import { Book } from '../data/books';
import { BookOpen, Sparkles, Award } from 'lucide-react';

interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, size = 'md', className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const getCoverGradient = (genre: string) => {
    switch (genre) {
      case 'Biznes':
        return 'from-purple-900 via-indigo-900 to-slate-900 border-purple-500/30';
      case 'Psixologiya':
        return 'from-emerald-950 via-teal-900 to-slate-900 border-emerald-500/30';
      case 'Roman':
        return 'from-amber-950 via-amber-900 to-stone-900 border-amber-500/30';
      case 'Motivatsiya':
        return 'from-orange-950 via-amber-800 to-neutral-900 border-orange-500/30';
      case 'Shaxsiy rivojlanish':
      default:
        return 'from-blue-950 via-slate-900 to-zinc-900 border-blue-500/30';
    }
  };

  const heightClasses = {
    sm: 'h-48 w-32',
    md: 'h-64 w-44 sm:h-72 sm:w-48',
    lg: 'h-80 w-56 sm:h-96 sm:w-64'
  }[size];

  return (
    <div className={`relative group cursor-pointer ${heightClasses} ${className}`}>
      {/* 3D Book Container */}
      <div className="relative w-full h-full rounded-r-lg rounded-l-xs overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_20px_40px_rgba(245,158,11,0.25)] border border-white/10">
        
        {/* Book Spine Texture */}
        <div className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-4 bg-gradient-to-r from-black/70 via-white/20 to-black/40 z-20 pointer-events-none" />

        {/* Real image if loaded */}
        {book.coverImage && !imgError ? (
          <img
            src={book.coverImage}
            alt={book.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Custom SVG Styling Fallback / Default Cover Art */
          <div className={`w-full h-full bg-gradient-to-br ${getCoverGradient(book.genre)} p-4 flex flex-col justify-between relative overflow-hidden`}>
            {/* Background Decorative Pattern */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

            {/* Top Badge */}
            <div className="flex justify-between items-start z-10 pl-2">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black/40 text-amber-400 border border-amber-500/30 backdrop-blur-sm flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                {book.genre}
              </span>
            </div>

            {/* Center Title & Author */}
            <div className="z-10 pl-2 my-auto text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/30 text-amber-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-white tracking-tight leading-tight line-clamp-2 text-base sm:text-lg">
                {book.title}
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
              <p className="text-xs text-amber-200/80 font-medium tracking-wide">
                {book.author}
              </p>
            </div>

            {/* Bottom Footer */}
            <div className="z-10 pl-2 text-center pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                ★ {book.rating}
              </span>
              <span className="text-amber-300/80 uppercase tracking-wider text-[9px]">
                {book.publisher}
              </span>
            </div>
          </div>
        )}

        {/* Glass Sheen Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />

        {/* Custom Ribbon / Badge */}
        {book.badge && (
          <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-[10px] px-2 py-0.5 rounded shadow-lg tracking-wider uppercase flex items-center gap-1">
            <Award className="w-3 h-3" />
            {book.badge}
          </div>
        )}
      </div>

      {/* Shadow element underneath */}
      <div className="absolute -bottom-2 left-4 right-4 h-4 bg-black/60 rounded-full blur-md -z-10 group-hover:blur-lg group-hover:bg-amber-500/20 transition-all duration-500" />
    </div>
  );
};
