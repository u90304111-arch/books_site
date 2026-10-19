import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/books';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Ko'p beriladigan savollar
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Eng ko'p so'raladigan savollarga javoblar
            </p>
          </div>
          
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 self-start sm:self-auto"
          >
            <span>Barchasini ko'rish</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  <span className="font-serif">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3 animate-fade-in text-left">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
