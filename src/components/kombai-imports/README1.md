# KOMBAI CONTEXT & DESIGN SPECIFICATION: PAWTY SUPER APP

> File này được dùng làm **Context tài liệu chuẩn** khi bạn đưa vào ô chat Kombai, giúp Kombai hiểu chính xác Tech Stack, Design Tokens và quy chuẩn sinh mã nguồn của dự án Pawty.

---

## 1. TECH STACK BẮT BUỘC
- **Framework:** React 18 / 19 (TypeScript `.tsx`).
- **Styling:** Tailwind CSS (Sử dụng đúng các class tiện ích của Tailwind, hạn chế tối đa inline styles).
- **Icons Library:** `lucide-react` (Ưu tiên dùng icon SVG của Lucide như ShieldCheck, Heart, MapPin, Sparkles, MessageCircle, Star, ArrowRight).
- **Animation:** `framer-motion` (nếu có hiệu ứng hover/reveal).

---

## 2. BRAND DESIGN TOKENS (BẢNG MÀU & FONT CỦA PAWTY)
Kombai cần ánh xạ màu sắc thiết kế sang các class Tailwind tương ứng:

| Màu sắc | Hex Code | Tailwind Class tương ứng | Vai trò trong thiết kế |
|---|---|---|---|
| **Hồng San Hô (Coral)** | `#FF6F61` | `bg-coral`, `text-coral`, `border-coral` | CTA chính, điểm nhấn thương hiệu, nút thả tim |
| **Hồng San Hô Nhạt** | `#FFF5F4` | `bg-coral-50`, `bg-coral/10` | Nền thẻ badge, nền nút phụ |
| **Xanh Mint An Toàn** | `#A3E4D7` | `bg-mint`, `text-mint-dark`, `border-mint` | Huy hiệu Safe Pet, Sổ tiêm vắc-xin 7 bệnh |
| **Xanh Mint Nhạt** | `#F2FAF8` | `bg-mint-50` | Nền chứng nhận y tế an toàn |
| **Trắng Kem Nền** | `#FDFBF7` | `bg-cream` | Nền tổng thể ứng dụng, thay cho màu trắng chói |
| **Xám Than (Charcoal)** | `#2D3436` | `text-charcoal`, `bg-charcoal` | Tiêu đề chính, văn bản dễ đọc |
| **Vàng Ấm** | `#FDCB6E` | `text-warning`, `fill-warning` | Đánh giá 5 sao, vương miện Sen VIP |
| **Đỏ Báo Động** | `#E17055` | `text-danger`, `bg-danger` | Nút khẩn cấp SOS tìm Boss lạc 3km |

### Typography:
- **Headings / Tiêu đề:** Font tròn thân thiện `font-display` (Fredoka: 600, 700).
- **Body Text:** Dễ đọc `font-body` (Nunito: 400, 600, 700).

---

## 3. NGUYÊN TẮC SINH MÃ NGUỒN CHO KOMBAI (CLEAN CODE)
1. **Component Đơn Trách Nhiệm:** Mỗi component xuất ra phải là một React Functional Component sạch:
   ```tsx
   import React from 'react';
   // import { ShieldCheck, MapPin, Heart } from 'lucide-react';
   ```
2. **Bo Tròn Mềm Mại:** Sử dụng các bo góc lớn thân thiện thú cưng (`rounded-2xl`, `rounded-3xl`, `rounded-full`).
3. **Responsive Container:** Hỗ trợ hiển thị mượt mà trên mobile container (375px - 414px) và card desktop.
4. **Không tạo ảnh rác:** Hình ảnh avatar Boss hãy dùng thẻ `<img>` với URL Unsplash chất lượng cao hoặc prop `avatarUrl`.
5. **Định dạng dữ liệu thực tế:** 
   - Tên Boss: Mochi (Corgi), Bơ Béo (Golden), Bánh Mì (Mèo Anh lông ngắn).
   - Địa điểm: Chung cư Vinhomes Central Park, Masteri Thảo Điền, Sala.
   - Khoảng cách: "Cách bạn 280m", "Cách bạn 450m".
   - Huy hiệu: "Safe Pet • Đã Tiêm 7 Bệnh & Dại".
