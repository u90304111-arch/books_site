import React from 'react';
import { TESTIMONIALS } from '../data/books';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Kitobxonlar fikri
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Bizning mijozlarimizning haqiqiy fikrlari
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
              
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center text-amber-400 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-white/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-amber-300/80">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
