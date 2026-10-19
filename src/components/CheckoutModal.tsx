import React, { useState } from 'react';
import { CartItem } from './CartDrawer';
import { X, CheckCircle2, Info, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+998 ',
    address: '',
    paymentMethod: 'cash',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('uz-UZ') + " so'm";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered', e);
    }
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="glass-panel border border-amber-500/30 w-full max-w-xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-serif">
                Demo Buyurtma Qabul Qilindi! 🎉
              </h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                Rahmat, <strong className="text-white">{formData.fullName}</strong>! Buyurtma ma'lumotlaringiz muvaffaqiyatli ro'yxatga olindi.
              </p>
            </div>

            {/* Honest Demo Notice Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1 text-left flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-amber-300">Demo Rejim Eslatmasi:</strong>
                <span>
                  Ushbu sayt taqdimot va demo maqsadda yaratilgan. Haqiqiy to'lov va yetkazib berish tizimi ulanmagan.
                </span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="gold-gradient-bg text-slate-950 font-bold px-8 py-3 rounded-xl shadow-lg shadow-amber-500/25 hover:scale-105 transition-all text-sm"
            >
              Tushundim, davom etish
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-amber-400" />
                Buyurtmani rasmiylashtirish
              </h3>
              <p className="text-xs text-gray-400">
                Ma'lumotlaringizni kiriting (Demo xarid simulyatsiyasi)
              </p>
            </div>

            {/* Order Items Summary */}
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <div className="flex justify-between text-xs text-gray-300 font-medium">
                <span>Tanlangan kitoblar: ({items.length} ta xil)</span>
                <span className="text-amber-400 font-bold">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Ism va Familiyangiz *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Masalan: Sardor Rahimov"
                  className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Telefon raqamingiz *
                </label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+998 90 123 45 67"
                  className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Yetkazib berish manzili *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Shahar, tuman, ko'cha va xonadon..."
                  className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  To'lov usuli
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="cash">Naqd pul / Karta (Olganda to'lash)</option>
                  <option value="click">Click / Payme (Demo)</option>
                </select>
              </div>
            </div>

            {/* Note about real vs demo */}
            <p className="text-[11px] text-amber-200/70 italic bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
              * Haqiqiy bank to'lov tizimi biriktirilmagan; bu tugma demo xarid jarayonini namoyish etadi.
            </p>

            <button
              type="submit"
              className="w-full gold-gradient-bg text-slate-950 font-extrabold py-3.5 rounded-xl shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-95 transition-all text-sm"
            >
              Demo Buyurtmani tasdiqlash ({formatPrice(totalAmount)})
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
