import React from 'react';
import { ShieldCheck, ShoppingBag, Truck, Headset } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: "Sifatli kitoblar",
      description: "Faqat eng yaxshi va ishonchli nashrlar."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-amber-400" />,
      title: "Qulay xarid",
      description: "Oson va xavfsiz xarid qilish jarayoni."
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-400" />,
      title: "Tez yetkazib berish",
      description: "Buyurtmangiz tez va xavfsiz yetkaziladi."
    },
    {
      icon: <Headset className="w-6 h-6 text-amber-400" />,
      title: "Mijozlar qo'llab-quvvatlashi",
      description: "Savollaringiz uchun 24/7 yordam."
    }
  ];

  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Quote Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-2xl group">
              <img
                src="/images/reading-quote.jpg"
                alt="Kitob o'qiyotgan kitobxon"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border border-amber-400/30 backdrop-blur-md">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white italic leading-tight">
                  “Har bir kitob <br />
                  <span className="gold-gradient-text">– yangi bir dunyo.”</span>
                </p>
                <p className="text-xs text-amber-300 font-semibold tracking-widest uppercase mt-3">
                  — Kitob olami
                </p>
              </div>
            </div>
          </div>

          {/* Right Features Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">
                Afzalliklarimiz
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Nega bizni tanlaysiz?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-2">
                Biz sizga eng yaxshi kitoblarni taqdim etamiz
              </p>
            </div>

            {/* 2x2 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
