import React from 'react';
import { Search, CreditCard, PackageCheck } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      icon: <Search className="w-5 h-5 text-amber-400" />,
      title: "1. Tanlang",
      desc: "Kerakli kitobni qidiring va savatchaga qo'shing."
    },
    {
      num: "2",
      icon: <CreditCard className="w-5 h-5 text-amber-400" />,
      title: "2. To'lang",
      desc: "Qulay to'lov usulini tanlang va to'lovni amalga oshiring."
    },
    {
      num: "3",
      icon: <PackageCheck className="w-5 h-5 text-amber-400" />,
      title: "3. Oling",
      desc: "Buyurtmangiz tezda sizga yetkazib beriladi."
    }
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Kitob sotib olish qanday ishlaydi?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            3 oddiy qadamda sevimli kitobingiz sizda!
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-extrabold flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20 text-base">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif mb-1 flex items-center gap-2">
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
