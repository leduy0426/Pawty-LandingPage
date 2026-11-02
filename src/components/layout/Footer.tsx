import React from 'react';
import { LegalDocType } from '../legal/LegalModal';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigateSection }) => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center p-1 shadow-md">
                <img
                  src="/assets/pawty-icon.png"
                  alt="Pawty Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight flex items-center gap-1">
                Pawty
                <span className="w-2 h-2 rounded-full bg-coral inline-block"></span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Siêu ứng dụng kết nối cộng đồng nuôi thú cưng tại các khu chung cư & đô thị hiện đại. Giúp Boss có bạn dắt dạo, chủ nuôi an tâm với sổ tiêm điện tử và mạng lưới cứu hộ SOS 3km.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-coral shrink-0" />
                <span>Trụ sở: TP. Hồ Chí Minh & Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-coral shrink-0" />
                <span>support@pawty.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-coral shrink-0" />
                <span>Hotline hỗ trợ: 1900 8888 (8:00 - 21:00)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white tracking-wider uppercase text-xs">
              Khám Phá
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => onNavigateSection('features')}
                  className="hover:text-coral transition-colors"
                >
                  4 Trụ Cột Tính Năng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('dating')}
                  className="hover:text-coral transition-colors"
                >
                  Pawty Dating Hẹn Dạo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('safety')}
                  className="hover:text-coral transition-colors"
                >
                  Tiêu Chuẩn Safe Pet
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('ecosystem')}
                  className="hover:text-coral transition-colors"
                >
                  Hệ Sinh Thái Miễn Phí
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-coral transition-colors"
                >
                  Hỏi Đáp Thường Gặp
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Policies (Referenced from VNHUB_Web) */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white tracking-wider uppercase text-xs">
              Chính Sách & Pháp Lý
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-coral transition-colors text-left"
                >
                  Chính Sách Bảo Mật Vị Trí
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-coral transition-colors text-left"
                >
                  Quy Định &amp; Điều Khoản Sử Dụng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('community')}
                  className="hover:text-coral transition-colors text-left"
                >
                  Quy Chế Cộng Đồng Chung Cư
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('safety')}
                  className="hover:text-coral transition-colors text-left"
                >
                  Chế Tài Bùng Hẹn (Anti-Flake)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Apartment Partners & App */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white tracking-wider uppercase text-xs">
              Tải Ứng Dụng
            </h4>
            <p className="text-xs text-gray-400">
              Có sẵn trên iOS và Android. Tải ngay để tham gia cộng đồng thú cưng nội khu!
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => onNavigateSection('download')}
                className="w-full py-2 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors border border-gray-700"
              >
                🍏 Tải trên App Store
              </button>
              <button
                onClick={() => onNavigateSection('download')}
                className="w-full py-2 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors border border-gray-700"
              >
                🤖 Tải trên Google Play
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Pawty Super App. Tất cả các quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-1">
            <span>Thiết kế vì tình yêu thương Boss với</span>
            <Heart className="w-3.5 h-3.5 text-coral fill-coral inline" />
            <span>tại Việt Nam</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

