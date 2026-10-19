import React from 'react';
import { X, User, Heart, ShieldCheck, BookOpen } from 'lucide-react';
import { Book } from '../data/books';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: number[];
  allBooks: Book[];
  onSelectBook: (book: Book) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  allBooks,
  onSelectBook
}) => {
  if (!isOpen) return null;

  const wishlistedBooks = allBooks.filter((b) => wishlistIds.includes(b.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel border border-amber-500/30 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl text-left max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-500/20">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-serif">
              Kitobxon Profili
            </h3>
            <span className="text-xs text-amber-300 flex items-center gap-1 font-medium mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Premium Kitobxon Statusi
            </span>
          </div>
        </div>

        {/* Saved Wishlist Items */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              Sevimli Kitoblaringiz ({wishlistedBooks.length})
            </h4>
          </div>

          {wishlistedBooks.length === 0 ? (
            <div className="text-center py-8 bg-slate-900/50 rounded-2xl border border-white/5 space-y-2">
              <BookOpen className="w-8 h-8 text-gray-400 mx-auto" />
              <p className="text-xs text-gray-400">
                Hali sevimli kitoblar safiga birorta ham kitob qo'shmadingiz.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {wishlistedBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => {
                    onSelectBook(book);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-amber-500/40 cursor-pointer flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={book.coverImage || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c'}
                      alt={book.title}
                      className="w-9 h-12 object-cover rounded"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-white font-serif">
                        {book.title}
                      </h5>
                      <p className="text-[11px] text-gray-400">{book.author}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400">
                    {book.price.toLocaleString('uz-UZ')} so'm
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold"
          >
            Yopish
          </button>
        </div>

      </div>
    </div>
  );
};
