import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileCheck2, UserX, HeartHandshake, CheckCircle } from 'lucide-react';

export const SafetyPillarSection: React.FC = () => {
  const safetyCards = [
    {
      icon: FileCheck2,
      title: 'Xác Thực Sổ Tiêm Safe Pet',
      description: 'Chỉ các Boss có đầy đủ thông tin sổ tiêm phòng (7 bệnh & phòng dại) mới được cấp tick xanh kiểm chứng trên danh sách Pawty Dating.',
      color: 'text-mint-dark',
      bg: 'bg-mint-50',
    },
    {
      icon: ShieldAlert,
      title: 'Minh Bạch Hành Vi — Tránh Xung Đột',
      description: 'Chủ nuôi cam kết khai báo trung thực các thói quen cần lưu ý (sợ tiếng xe, giữ thức ăn, đuổi bồ câu) để chuẩn bị phương án dắt dạo an toàn.',
      color: 'text-coral',
      bg: 'bg-coral-50',
    },
    {
      icon: UserX,
      title: 'Chế Tài Bùng Hẹn (Anti-Flake)',
      description: 'Báo cáo không đến điểm hẹn 2 lần/tuần sẽ bị hệ thống tự động tạm khóa tính năng hẹn dạo 3 ngày. Giữ gìn văn hóa hẹn dạo đúng giờ và văn minh.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <section id="safety" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-50 border border-mint/40 text-mint-dark text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              Cam Kết Cộng Đồng An Toàn
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              An toàn của Boss là ưu tiên số 1, không đánh đổi
            </h2>

            <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
              Chúng tôi hiểu rằng dắt thú cưng đi dạo ở công viên đô thị luôn tiềm ẩn nỗi sợ chó cắn nhau, bệnh truyền nhiễm hoặc gặp phải những cuộc hẹn bùng vô trách nhiệm. Pawty giải quyết triệt để bằng hệ thống quy chế khắt khe.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân số 91/2025/QH15 — Ẩn số phòng/tầng, chỉ hiện bán kính tương đối',
                'Xác minh danh tính số điện thoại qua OTP Firebase chống nick ảo và quấy rối',
                'Gợi ý 3 địa điểm dắt dạo trung điểm có camera giám sát và thân thiện với Boss',
                'Cơ chế Hủy tương hợp (Bỏ Match) xóa sạch lịch sử trò chuyện khi không hợp gu',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-charcoal font-semibold">
                  <CheckCircle className="w-5 h-5 text-mint-dark shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right 3 Safety Cards */}
          <div className="lg:col-span-6 space-y-5">
            {safetyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="p-6 rounded-3xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all flex items-start gap-5"
                >
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-charcoal">
                      {card.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
