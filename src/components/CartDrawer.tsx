import React from 'react';
import { Book } from '../data/books';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export interface CartItem {
  book: Book;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (bookId: number, delta: number) => void;
  onRemoveItem: (bookId: number) => void;
  onClearCart: () => void;
  onProceedCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedCheckout
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('uz-UZ') + " so'm";
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel border-l border-amber-500/30 shadow-2xl flex flex-col justify-between text-left">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                Xarid Savatchasi
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mx-auto text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base text-gray-300 font-medium">
                  Savatchangiz bo'sh
                </p>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Yoqgan kitoblaringizni tanlab, 'Sotib olish' tugmasi orqali bu yerga qo'shishingiz mumkin.
                </p>
              </div>
            ) : (
              items.map(({ book, quantity }) => (
                <div
                  key={book.id}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex gap-4 items-center"
                >
                  <img
                    src={book.coverImage || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c'}
                    alt={book.title}
                    className="w-14 h-20 object-cover rounded-lg border border-white/10 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white font-serif truncate">
                      {book.title}
                    </h4>
                    <p className="text-xs text-amber-300">
                      {formatPrice(book.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-white/15 rounded-lg bg-slate-950 overflow-hidden text-xs">
                        <button
                          onClick={() => onUpdateQuantity(book.id, -1)}
                          className="px-2 py-0.5 text-gray-300 hover:text-white hover:bg-white/10"
                        >
                          -
                        </button>
                        <span className="px-2.5 font-bold text-white">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(book.id, 1)}
                          className="px-2 py-0.5 text-gray-300 hover:text-white hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(book.id)}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 space-y-4 bg-slate-950/80">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Jami summasi:</span>
                <span className="text-xl font-extrabold gold-gradient-text">
                  {formatPrice(totalAmount)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onClearCart}
                  className="py-3 px-4 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-semibold transition-all"
                >
                  Tozalash
                </button>

                <button
                  onClick={onProceedCheckout}
                  className="gold-gradient-bg text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all text-xs flex items-center justify-center gap-2"
                >
                  <span>Buyurtma berish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
