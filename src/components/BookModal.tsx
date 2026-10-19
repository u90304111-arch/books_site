import React, { useState } from 'react';
import { Book } from '../data/books';
import { BookCover } from './BookCover';
import { X, Star, ShoppingBag, CheckCircle, BookOpen, FileText, Sparkles } from 'lucide-react';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book, quantity: number) => void;
  onBuyNow: (book: Book, quantity: number) => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose, onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);

  if (!book) return null;

  const formatPrice = (price: number) => {
    return price.toLocaleString('uz-UZ') + " so'm";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div className="glass-panel border border-amber-500/30 w-full max-w-3xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-gray-400 hover:text-white hover:border-amber-500 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Book Cover Visual */}
          <div className="md:col-span-5 flex flex-col items-center">
            <BookCover book={book} size="lg" />
            <div className="mt-4 text-center space-y-1">
              <span className="text-xs text-amber-300/80 uppercase font-semibold tracking-wider">
                Nashriyot: {book.publisher} ({book.publishedYear})
              </span>
              <p className="text-[11px] text-gray-400 font-mono">
                ISBN: {book.isbn}
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Content */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Genre & Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {book.genre}
              </span>
              <div className="flex items-center gap-1.5 text-xs bg-slate-900/60 px-3 py-1 rounded-full border border-white/10">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-white font-bold">{book.rating}</span>
                <span className="text-gray-400">({book.reviewsCount} baholar)</span>
              </div>
            </div>

            {/* Title & Author */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif leading-tight">
                {book.title}
              </h2>
              <p className="text-base text-amber-300 font-medium mt-1">
                Muallif: {book.author}
              </p>
            </div>

            {/* Price section */}
            <div className="flex items-baseline gap-3 p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20">
              <span className="text-2xl sm:text-3xl font-extrabold gold-gradient-text">
                {formatPrice(book.price)}
              </span>
              {book.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(book.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400">
                Mazmuni:
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                {book.description}
              </p>
            </div>

            {/* Benefit Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Asosiy Foydasi:</span>
              </div>
              <p className="text-sm text-amber-100 font-medium">
                {book.benefit}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Sahifalar: <strong className="text-white">{book.pages} bet</strong></span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Tili: <strong className="text-white">{book.language}</strong></span>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 font-medium">Soni:</span>
                <div className="flex items-center border border-white/15 rounded-xl overflow-hidden bg-slate-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    onAddToCart(book, quantity);
                    onClose();
                  }}
                  className="glass-panel text-white font-bold py-3 px-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm border-amber-500/30"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  Savatchaga qo'shish
                </button>

                <button
                  onClick={() => {
                    onBuyNow(book, quantity);
                    onClose();
                  }}
                  className="gold-gradient-bg text-slate-950 font-extrabold py-3 px-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-amber-500/25"
                >
                  <CheckCircle className="w-4 h-4" />
                  Hozir xarid qilish
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
