import React from 'react';
import { Book } from '../data/books';
import { BookCover } from './BookCover';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  isWishlisted: boolean;
  onToggleWishlist: (bookId: number) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onSelect,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  // Format price helper
  const formatPrice = (price: number) => {
    return price.toLocaleString('uz-UZ') + " so'm";
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex flex-col justify-between relative group border border-white/10 hover:border-amber-500/40">
      
      {/* Top Wishlist & Genre Tag */}
      <div className="flex items-center justify-between mb-3 z-20">
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
          {book.genre}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(book.id);
          }}
          className={`p-2 rounded-full transition-all ${
            isWishlisted
              ? 'text-red-500 bg-red-500/10 border border-red-500/30'
              : 'text-gray-400 hover:text-red-400 hover:bg-white/5'
          }`}
          aria-label="Sevimlilar safiga qo'shish"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Book Cover Center */}
      <div
        onClick={() => onSelect(book)}
        className="flex justify-center my-3 relative group/cover cursor-pointer"
      >
        <BookCover book={book} size="md" />
        
        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover/cover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
          <span className="bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
            <Eye className="w-3.5 h-3.5" /> Batafsil
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="space-y-2 mt-2">
        
        {/* Rating Stars */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(book.rating) ? 'fill-current' : 'opacity-40'
                }`}
              />
            ))}
          </div>
          <span className="text-amber-300 font-bold">{book.rating}</span>
          <span className="text-gray-400 text-[11px]">({book.reviewsCount})</span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(book)}
          className="text-lg font-bold text-white font-serif line-clamp-1 hover:text-amber-400 cursor-pointer transition-colors"
        >
          {book.title}
        </h3>

        {/* Author */}
        <p className="text-xs text-amber-200/80 font-medium">
          {book.author}
        </p>

        {/* Benefit snippet */}
        <p className="text-xs text-gray-300/80 line-clamp-2 leading-relaxed">
          {book.benefit}
        </p>
      </div>

      {/* Price & Action Buttons */}
      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <div>
          {book.originalPrice && (
            <span className="block text-[11px] text-gray-400 line-through">
              {formatPrice(book.originalPrice)}
            </span>
          )}
          <span className="text-base sm:text-lg font-extrabold text-white gold-gradient-text">
            {formatPrice(book.price)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Batafsil Button */}
          <button
            onClick={() => onSelect(book)}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all"
          >
            Batafsil
          </button>

          {/* Sotib olish / Cart Button */}
          <button
            onClick={() => onAddToCart(book)}
            className="p-2.5 rounded-xl gold-gradient-bg text-slate-950 font-bold hover:scale-105 active:scale-95 transition-all shadow-md shadow-amber-500/20"
            title="Savatchaga qo'shish"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
