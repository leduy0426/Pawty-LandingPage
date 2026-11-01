import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Users, AlertCircle } from 'lucide-react';

export type LegalDocType = 'terms' | 'privacy' | 'community' | 'safety' | null;

interface LegalModalProps {
  activeDoc: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeDoc, onClose }) => {
  if (!activeDoc) return null;

  const getDocContent = () => {
    switch (activeDoc) {
      case 'privacy':
        return {
          title: 'Chính Sách Bảo Mật Thông Tin & Dữ Liệu Vị Trí',
          icon: ShieldCheck,
          content: (
            <div className="space-y-4 text-sm text-charcoal-light leading-relaxed">
              <p>
                <strong>1. Thu thập dữ liệu vị trí:</strong> Pawty chỉ thu thập tọa độ địa lý nhằm mục đích tính toán khoảng cách tương đối (ví dụ: "Cách bạn 280m") để gợi ý bạn dắt dạo trên Radar PostGIS. <em>Ứng dụng tuyệt đối không lưu trữ hay công khai số nhà, số tầng hoặc căn hộ chính xác của người dùng.</em>
              </p>
              <p>
                <strong>2. Hồ sơ thú cưng & Sổ tiêm:</strong> Hình ảnh thú cưng, lịch tiêm chủng và các ghi chú hành vi được lưu trữ mã hóa an toàn trên hệ thống. Thông tin sổ tiêm chỉ được hiển thị trạng thái "Đã tiêm đầy đủ" (Huy hiệu Safe Pet) hoặc ngày tiêm tới hạn cho cộng đồng để phục vụ sự an toàn.
              </p>
              <p>
                <strong>3. Xác thực số điện thoại:</strong> Chúng tôi sử dụng định danh OTP SMS (Firebase Auth) để chống tạo nick ảo, bảo đảm mỗi tài khoản gắn liền với một người dùng thực tế tại khu chung cư.
              </p>
              <p>
                <strong>4. Chia sẻ với bên thứ ba:</strong> Pawty cam kết không bán, cho thuê hay thương mại hóa dữ liệu cá nhân của người dùng cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý rõ ràng.
              </p>
            </div>
          ),
        };
      case 'terms':
        return {
          title: 'Điều Khoản & Điều Kiện Sử Dụng Dịch Vụ',
          icon: FileText,
          content: (
            <div className="space-y-4 text-sm text-charcoal-light leading-relaxed">
              <p>
                <strong>1. Chấp thuận điều khoản:</strong> Bằng việc tải, cài đặt hoặc sử dụng Pawty, bạn đồng ý tuân thủ toàn bộ các điều khoản được quy định tại đây.
              </p>
              <p>
                <strong>2. Trách nhiệm của chủ nuôi:</strong> Bạn chịu trách nhiệm hoàn toàn về hành vi và tình trạng sức khỏe của thú cưng khi tham gia các buổi hẹn dắt dạo ngoài thực tế. Bạn phải bảo đảm Boss đã được tiêm phòng dại và đeo rọ mõm / dây xích nếu Boss có dấu hiệu kích động.
              </p>
              <p>
                <strong>3. Gói Sen VIP & Thanh toán:</strong> Gói cước Sen VIP (49.000đ/tháng) và phí phát sóng SOS Tìm Boss Lạc (39.000đ) được thanh toán qua mã VietQR. Sau khi dịch vụ được kích hoạt, các khoản phí không được hoàn lại ngoại trừ trường hợp lỗi kỹ thuật từ hệ thống.
              </p>
              <p>
                <strong>4. Chấm dứt dịch vụ:</strong> Pawty có quyền khóa tài khoản tạm thời hoặc vĩnh viễn đối với các hành vi quấy rối, khai báo thông tin tiêm phòng giả mạo, hoặc bùng hẹn nhiều lần.
              </p>
            </div>
          ),
        };
      case 'community':
        return {
          title: 'Quy Chế Cộng Đồng & Văn Hóa Hẹn Dạo Văn Minh',
          icon: Users,
          content: (
            <div className="space-y-4 text-sm text-charcoal-light leading-relaxed">
              <p>
                <strong>1. Văn hóa chung cư:</strong> Luôn mang theo túi dọn vệ sinh khi dắt cún tại công viên và sảnh chung cư. Không để Boss phóng uế bừa bãi làm ảnh hưởng đến cư dân xung quanh.
              </p>
              <p>
                <strong>2. Tôn trọng không gian riêng:</strong> Luôn hỏi ý kiến chủ nuôi đối diện trước khi cho Boss tiếp xúc gần hoặc cho ăn thức ăn mới.
              </p>
              <p>
                <strong>3. Khai báo hành vi trung thực:</strong> Không giấu giếm các thói quen xấu của cún (sợ chó lớn, hay giật dây, cắn xe máy) nhằm tránh xung đột đáng tiếc.
              </p>
            </div>
          ),
        };
      case 'safety':
        return {
          title: 'Chính Sách Chế Tài Bùng Hẹn (Anti-Flake Protocol)',
          icon: AlertCircle,
          content: (
            <div className="space-y-4 text-sm text-charcoal-light leading-relaxed">
              <p>
                <strong>1. Cam kết đến điểm hẹn:</strong> Khi hai bên đã bấm xác nhận "Chốt Kèo Dắt Dạo" trên bong bóng hẹn hò, hệ thống sẽ gửi thông báo nhắc việc trước 30 phút và 10 phút.
              </p>
              <p>
                <strong>2. Hủy hẹn có trách nhiệm:</strong> Nếu có việc đột xuất, người dùng phải bấm "Hủy Hẹn" trước tối thiểu 1 tiếng để đối phương chủ động sắp xếp thời gian.
              </p>
              <p>
                <strong>3. Mức phạt:</strong> Tài khoản bị đối phương báo cáo "Không đến điểm hẹn mà không thông báo" 2 lần trong vòng 7 ngày sẽ bị hệ thống tự động khóa tính năng Radar Quẹt Thẻ trong 3 ngày và gắn nhãn cảnh báo.
              </p>
            </div>
          ),
        };
      default:
        return null;
    }
  };

  const doc = getDocContent();
  if (!doc) return null;
  const Icon = doc.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal">
                {doc.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 text-charcoal-light hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="py-6 overflow-y-auto flex-1 pr-2">
            {doc.content}
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-coral hover:bg-coral-dark text-white font-display font-bold text-sm shadow-sm transition-all"
            >
              Tôi Đã Hiểu & Đồng Ý
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

