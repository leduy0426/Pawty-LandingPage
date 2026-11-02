import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, Check, ArrowRight } from 'lucide-react';

interface FreeEcosystemProps {
  onDownloadClick?: () => void;
}

export const FreeEcosystemSection: React.FC<FreeEcosystemProps> = ({ onDownloadClick }) => {
  return (
    <section id="ecosystem" className="py-24 bg-cream-warm/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-50 border border-mint/40 text-mint-dark text-xs font-bold uppercase tracking-wider">
            <Gift className="w-4 h-4 text-mint-dark" />
            100% Miễn Phí Vì Cộng Đồng
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Không gói cước, không phí ẩn. Trọn đời cho mọi Boss &amp; Sen
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Chúng tôi tin rằng mọi thú cưng đô thị đều xứng đáng có bạn đồng hành và được chăm sóc chu đáo nhất mà không bị rào cản chi phí.
          </p>
        </div>

        {/* 2 Big Feature Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: 100% Free Community Super App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-4xl bg-white border border-mint/40 shadow-card flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-mint-dark px-3 py-1 rounded-full bg-mint-50 border border-mint/30">
                  Dành Cho Cư Dân
                </span>
                <span className="text-2xl font-extrabold font-display text-mint-dark">
                  0đ <span className="text-xs text-charcoal-light font-normal">/trọn đời</span>
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-charcoal">
                  Mạng Xã Hội &amp; Pawty Dating Miễn Phí
                </h3>
                <p className="text-sm text-charcoal-light mt-2 leading-relaxed">
                  Toàn bộ các phân hệ tính năng đều mở khóa hoàn toàn, sẵn sàng kết nối cư dân trong khu đô thị của bạn.
                </p>
              </div>

              <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  'Bảng tin khoảnh khắc chuẩn Facebook / Instagram',
                  'Không gian Pawty Dating tìm bạn dắt dạo không giới hạn',
                  'Hồ sơ thú cưng tự khai báo tiêm phòng minh bạch',
                  'Chat riêng tư & tự động đề xuất 3 trung điểm dắt dạo',
                  'Bảo mật dữ liệu cá nhân theo Luật 91/2025/QH15',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal">
                    <Check className="w-4 h-4 text-mint-dark shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onDownloadClick}
              className="mt-8 w-full py-4 rounded-full bg-mint text-charcoal hover:bg-mint-dark hover:text-white font-display font-bold text-sm shadow-md shadow-mint/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Tải App Trải Nghiệm Miễn Phí</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Lost Pet Community Bulletin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 sm:p-10 rounded-4xl bg-gradient-to-br from-coral-50 via-white to-amber-50 border border-coral/30 shadow-card flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-coral px-3 py-1 rounded-full bg-coral-50 border border-coral/30">
                  Bảng Tin Tìm Boss
                </span>
                <span className="text-xs font-bold text-coral flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Hỗ Trợ Cộng Đồng
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-charcoal">
                  Bảng Tin Đăng Bài Tìm Boss Lạc
                </h3>
                <p className="text-sm text-charcoal-light mt-2 leading-relaxed">
                  Không gian bảng tin cộng đồng hỗ trợ người nuôi đăng bài tìm kiếm Boss thất lạc và tiếp nhận manh mối từ người dân xung quanh.
                </p>
              </div>

              <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  'Đăng bài tìm Boss kèm ảnh nhận dạng, vị trí nhìn thấy và liên hệ',
                  'Cộng đồng xung quanh cập nhật manh mối khi nhìn thấy bé',
                  'Kết nối trực tiếp chủ nuôi với người phát hiện manh mối',
                  '100% miễn phí — chung tay hỗ trợ cộng đồng yêu thú cưng',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal">
                    <Sparkles className="w-4 h-4 text-coral shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onDownloadClick}
              className="mt-8 w-full py-4 rounded-full bg-coral hover:bg-coral-dark text-white font-display font-bold text-sm shadow-md shadow-coral/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Gia Nhập Cộng Đồng Pawty Ngay</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
