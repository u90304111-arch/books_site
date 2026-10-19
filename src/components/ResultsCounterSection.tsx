import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Users, ThumbsUp, Clock } from 'lucide-react';

export const ResultsCounterSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Counter animation logic
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount1(Math.min(10, Math.floor(progress * 10)));
      setCount2(Math.min(1000, Math.floor(progress * 1000)));
      setCount3(Math.min(500, Math.floor(progress * 500)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const stats = [
    {
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      display: `${count1}+`,
      label: "Kitoblar"
    },
    {
      icon: <Users className="w-5 h-5 text-amber-400" />,
      display: `${count2.toLocaleString('uz-UZ')}+`,
      label: "Kitobxonlar"
    },
    {
      icon: <ThumbsUp className="w-5 h-5 text-amber-400" />,
      display: `${count3}+`,
      label: "Tavsiya etilgan kitoblar"
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      display: "24/7",
      label: "Onlayn foydalanish"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Bizning natijalarimiz
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Bu faqat demo ma'lumotlar
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/10 text-left hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif gold-gradient-text tracking-tight">
                {stat.display}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
