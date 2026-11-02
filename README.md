# 🐾 Pawty — Landing Page

> Trang giới thiệu & chuyển đổi (Landing Page) chính thức cho siêu ứng dụng **Pawty** — Nền tảng kết nối cộng đồng nuôi thú cưng tại chung cư & đô thị.

---

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Design Tokens:**
  - `Coral`: `#FF6F61` (Hồng San Hô - Năng động, ấm áp, CTA)
  - `Mint`: `#A3E4D7` (Xanh Mint - Safe Pet, Sổ tiêm)
  - `Cream`: `#FDFBF7` (Trắng Kem - Nền tảng êm dịu)
  - `Charcoal`: `#2D3436` (Xám Than - Chữ & Đầu đề)
- **Typography:** `Fredoka` & `Quicksand` (Cute Display/Tiêu đề bo tròn) + `Quicksand` & `Nunito` (Nội dung)
- **Icons:** `lucide-react`
- **Animation:** `framer-motion`
- **Hosting / Deployment:** [Vercel](https://vercel.com/) (Tối ưu SPA Routing qua `vercel.json`)

---

## 📂 Cấu Trúc Thư Mục

```
Pawty-LandingPage/
├── public/
│   └── assets/              # Logo, icon, mascot, hình minh họa
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar (Sticky Glassmorphism), Footer
│   │   ├── sections/        # Hero, TrustStats, FeaturesBento, InteractiveRadar, Safety, PricingVip, Testimonials, Faq, DownloadCTA
│   │   ├── legal/           # LegalModal (Chính sách bảo mật, Điều khoản, Quy chế)
│   │   └── kombai-imports/  # Thư mục chứa các component export từ Kombai
│   ├── data/                # Mock data (pets, features, testimonials, faq)
│   ├── styles/              # index.css với Tailwind tokens & scrollbar
│   ├── App.tsx              # Component trung tâm kết nối các sections
│   └── main.tsx
├── vercel.json              # Cấu hình routing cho Vercel SPA
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🛠️ Hướng Dẫn Phát Triển (Local Development)

```bash
# 1. Cài đặt dependencies
npm install

# 2. Khởi chạy server phát triển (Port 3000)
npm run dev

# 3. Build sản phẩm tối ưu cho production
npm run build

# 4. Chạy thử bản build trước khi deploy
npm run preview
```

---

## 🎨 Chiến Lược Tối Ưu Kombai (Bảo Toàn 42 Credits)

- **Nguyên tắc "Micro-Conversion":** Không convert cả màn hình lớn 1920x8000px.
- **Hạn mức đề xuất:** Chỉ sử dụng tối đa **16–18 credits** cho 3 component đồ họa/mockup phức tạp trên Figma:
  1. `HeroPhoneMockup`: Mockup điện thoại kèm huy hiệu bay bổng (~6 credits).
  2. `BentoVisualCard`: Thẻ minh họa tính năng dạng Bento (~6 credits).
  3. `SafePetBadgeCard`: Thẻ sổ tiêm phòng & danh sách thói quen Boss (~4 credits).
- **Giữ lại an toàn:** ~24–26 credits dự phòng.

---

## 🌐 Triển Khai Vercel (Deployment)

1. Đẩy dự án lên GitHub.
2. Truy cập [Vercel Dashboard](https://vercel.com/), chọn **Add New Project**.
3. Import repository `Pawty-LandingPage`.
4. Framework Preset: **Vite**.
5. Nhấn **Deploy** — Vercel sẽ tự động đọc `vercel.json` và build trang trong vòng dưới 1 phút.
