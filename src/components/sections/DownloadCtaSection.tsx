import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Sparkles } from 'lucide-react';

export const DownloadCtaSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-4xl bg-gradient-to-r from-coral to-coral-dark text-white p-8 sm:p-14 shadow-2xl overflow-hidden">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-warning" />
                Tham Gia Ngay Hôm Nay
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Để mỗi buổi chiều của Boss luôn tràn ngập tiếng cười!
              </h2>

              <p className="text-white/90 text-base sm:text-lg max-w-2xl font-body">
                Tải ứng dụng Pawty hoàn toàn miễn phí trên iOS và Android. Kết nối ngay với hàng nghìn Boss &amp; Sen thân thiện cùng khu chung cư!
              </p>

              {/* Badges / Store Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#download"
                  className="px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-gray-900 transition-all shadow-md flex items-center gap-3"
                >
                  <Smartphone className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-medium uppercase">Download on the</div>
                    <div className="text-sm font-bold font-display leading-tight">App Store</div>
                  </div>
                </a>

                <a
                  href="#download"
                  className="px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-gray-900 transition-all shadow-md flex items-center gap-3"
                >
                  <div className="w-6 h-6 flex items-center justify-center text-xl">
                    ▶
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-medium uppercase">Get it on</div>
                    <div className="text-sm font-bold font-display leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right QR Code Box */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-3xl text-charcoal shadow-2xl flex flex-col items-center text-center max-w-[240px]"
              >
                <div className="w-40 h-40 bg-gray-100 rounded-2xl p-2 flex items-center justify-center border-2 border-dashed border-coral/40 relative">
                  <QrCode className="w-32 h-32 text-charcoal" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="w-7 h-7 bg-coral rounded-lg flex items-center justify-center text-white text-xs shadow-md">
                      🐾
                    </span>
                  </div>
                </div>

                <div className="mt-4 font-display font-bold text-sm text-charcoal">
                  Mở Camera chụp mã tải app
                </div>
                <div className="text-[11px] text-charcoal-light mt-0.5">
                  Tương thích iOS 15+ & Android 10+
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

