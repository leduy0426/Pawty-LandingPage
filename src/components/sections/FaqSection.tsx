import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_LIST } from '../../data/landingData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-cream-warm/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-50 border border-mint/40 text-mint-dark text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Giải Đáp Thắc Mắc
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal leading-tight">
            Những câu hỏi thường gặp về Pawty
          </h2>
          <p className="text-base text-charcoal-light">
            Mọi điều bạn cần biết trước khi cho Boss bắt đầu tham gia cộng đồng dắt dạo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-cream-warm/20 transition-colors"
                >
                  <span className="font-display font-bold text-lg text-charcoal flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-coral shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-light shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-coral' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-light leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

