import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl glass-panel border border-amber-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
              <Mail className="w-8 h-8" />
            </div>

            {/* Title & Subtext */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Yangiliklarga obuna bo'ling
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Eng so'nggi kitoblar, aksiyalar va yangiliklar haqida birinchi bo'lib xabardor bo'ling!
              </p>
            </div>

            {/* Form */}
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-center gap-2 animate-fade-in text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Rahmat! Siz muvaffaqiyatli obuna bo'ldingiz.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email manzilingiz"
                  className="w-full bg-slate-900/90 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 gold-gradient-bg text-slate-950 font-extrabold px-8 py-3.5 rounded-2xl shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Obuna bo'lish</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
