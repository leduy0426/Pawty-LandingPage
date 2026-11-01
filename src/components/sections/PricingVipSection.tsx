import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, Sparkles, Flame, ShieldAlert, Heart } from 'lucide-react';

interface PricingProps {
  onUpgradeClick?: () => void;
}

export const PricingVipSection: React.FC<PricingProps> = ({ onUpgradeClick }) => {
  return (
    <section id="pricing" className="py-24 bg-cream-warm/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Crown className="w-4 h-4 text-warning" />
            Đặc Quyền Dành Cho Sen
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Minh bạch chi phí, đầu tư cho hạnh phúc của Boss
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Bắt đầu hoàn toàn miễn phí hoặc nâng cấp gói Sen VIP để nhận trọn vẹn ưu đãi độc quyền từ cộng đồng chung cư.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-4xl bg-white border border-gray-200 shadow-card flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-light">
                  Cơ Bản
                </span>
                <h3 className="font-display font-bold text-2xl text-charcoal mt-1">
                  Sen Tiêu Chuẩn
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-charcoal">0đ</span>
                  <span className="text-sm font-semibold text-charcoal-light">/trọn đời</span>
                </div>
                <p className="text-xs text-charcoal-light mt-2">
                  Dành cho chủ nuôi mới muốn trải nghiệm quản lý sổ tiêm và tìm bạn dắt dạo nội khu.
                </p>
              </div>

              <ul className="space-y-3 border-t border-gray-100 pt-6">
                {[
                  'Quản lý 1 hồ sơ Boss & sổ tiêm điện tử',
                  'Lịch nhắc tiêm phòng và tẩy giun tự động',
                  'Quẹt thẻ 20 lượt/ngày tìm bạn trong 3km',
                  'Nhắn tin trò chuyện khi đã ghép đôi',
                  'Tham gia mạng xã hội khoảnh khắc Boss',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal">
                    <Check className="w-4 h-4 text-mint-dark shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onUpgradeClick}
              className="mt-8 w-full py-3.5 rounded-full border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-display font-bold text-sm transition-all"
            >
              Bắt Đầu Miễn Phí
            </button>
          </motion.div>

          {/* Card 2: Sen VIP (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 rounded-4xl bg-white border-2 border-coral shadow-floating flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-coral text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-2xl">
              Phổ biến nhất 🔥
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-coral flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5" /> Gói Hội Viên
                </span>
                <h3 className="font-display font-bold text-2xl text-charcoal mt-1">
                  Sen VIP Đẳng Cấp
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-coral">49.000đ</span>
                  <span className="text-sm font-semibold text-charcoal-light">/tháng</span>
                </div>
                <p className="text-xs text-charcoal-light mt-2">
                  Thanh toán siêu tốc qua VietQR — Tiết kiệm hơn 300.000đ chi phí spa & cafe thú cưng mỗi tháng.
                </p>
              </div>

              <ul className="space-y-3 border-t border-gray-100 pt-6">
                {[
                  'Tất cả tính năng của gói Sen Tiêu Chuẩn',
                  'Quẹt thẻ KHÔNG GIỚI HẠN mỗi ngày',
                  'Vương miện vàng Sen VIP nổi bật trên avatar',
                  'Xem danh sách ai đã thả tim Boss của bạn',
                  'Ưu tiên hiển thị hồ sơ Boss lên đầu Radar x3',
                  'Voucher giảm 35% tại hệ thống Pet Spa & Cafe đối tác',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal font-semibold">
                    <Sparkles className="w-4 h-4 text-warning shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onUpgradeClick}
              className="mt-8 w-full py-4 rounded-full bg-coral hover:bg-coral-dark text-white font-display font-bold text-base shadow-card-hover hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              Nâng Cấp Sen VIP (49k)
            </button>
          </motion.div>

          {/* Card 3: Emergency SOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-4xl bg-gradient-to-b from-red-50 to-white border border-red-200 shadow-card flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-danger flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> Dịch Vụ Cứu Hộ Khẩn Cấp
                </span>
                <h3 className="font-display font-bold text-2xl text-charcoal mt-1">
                  Báo Động SOS 3km
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-danger">39.000đ</span>
                  <span className="text-sm font-semibold text-charcoal-light">/lần phát sóng</span>
                </div>
                <p className="text-xs text-charcoal-light mt-2">
                  Kích hoạt tức thì khi Boss lạc tại chung cư, công viên hoặc đường phố xung quanh.
                </p>
              </div>

              <ul className="space-y-3 border-t border-gray-200 pt-6">
                {[
                  'Bắn Push Notification khẩn cấp bán kính 3km',
                  'Âm thanh báo động riêng biệt thu hút sự chú ý',
                  'Hiển thị Banner khẩn cấp trên đầu app toàn bộ cư dân',
                  'AI đối soát nhận diện ảnh Boss khi có người báo tìm thấy',
                  'Đường dây nóng kết nối trực tiếp chủ nuôi với người phát hiện',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal">
                    <Flame className="w-4 h-4 text-danger shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onUpgradeClick}
              className="mt-8 w-full py-3.5 rounded-full border-2 border-danger text-danger hover:bg-danger hover:text-white font-display font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4" />
              Tìm Hiểu Mạng Lưới SOS
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

