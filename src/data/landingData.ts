export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
  colorScheme: 'coral' | 'mint' | 'warning' | 'danger';
}

export interface PetCardMock {
  id: string;
  name: string;
  species: 'Chó' | 'Mèo';
  breed: string;
  age: string;
  distance: string;
  apartment: string;
  avatar: string;
  isVaccinated: boolean;
  goodHabits: string[];
  watchOutHabits: string[];
  personality: string[];
}

export interface TestimonialItem {
  id: string;
  ownerName: string;
  petName: string;
  petType: string;
  apartment: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const APARTMENT_PARTNERS = [
  'Vinhomes Central Park',
  'Masteri Thảo Điền',
  'Sala Đại Quang Minh',
  'Vinhomes Grand Park',
  'The Manor',
  'Times City',
  'Eco Green Saigon',
  'Goldmark City'
];

export const KEY_STATS = [
  { value: '30+', label: 'Hồ sơ mẫu trải nghiệm ngay', detail: 'Tài khoản test1 -> test30' },
  { value: '100%', label: 'Xác thực tiêm chủng Safe Pet', detail: 'Sổ tiêm 7 bệnh & phòng dại' },
  { value: '48+', label: 'Cụm chung cư đô thị', detail: 'TP.HCM & Hà Nội' },
  { value: '99.4%', label: 'Hẹn dạo an toàn văn minh', detail: 'Tuân thủ Luật Dữ Liệu 91/2025/QH15' },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'radar-infinite',
    badge: 'CORE 1: POSTGIS RADAR TINDER',
    title: 'Radar Quẹt Thẻ Hẹn Dạo Vô Tận & Hoàn Tác',
    description: 'Khám phá Boss lân cận trong bán kính 500m - 3km. Cơ chế cọc thẻ tuần hoàn không bao giờ hết, kèm nút Hoàn tác (Rewind Swipe) lấy lại lượt quẹt nhầm. Khớp lệnh Match bắn pháo hoa Confetti rực rỡ!',
    highlight: 'Tuần hoàn cọc thẻ & Hoàn tác Rewind',
    iconName: 'Compass',
    colorScheme: 'coral',
  },
  {
    id: 'gemini-sos',
    badge: 'CORE 2: GOOGLE GEMINI AI VISION',
    title: 'Báo Động SOS 3km & AI Tự Động Viết Mô Tả',
    description: 'Đột phá AI: Chụp ảnh Boss từ điện thoại, Gemini Vision tự động nhận diện giống loài, màu lông, phụ kiện và viết mô tả nhận dạng cực chuẩn trong 3 giây. Phát sóng Push Notification 3km và truy vết manh mối cư dân báo về.',
    highlight: '✨ AI Gemini Vision trích xuất đặc điểm 3s',
    iconName: 'Sparkles',
    colorScheme: 'danger',
  },
  {
    id: 'safe-passport',
    badge: 'CORE 3: PET FAMILY PASSPORT',
    title: 'Hồ Sơ Boss Chuẩn Quốc Tế & Sổ Tiêm Safe Pet',
    description: 'Hồ sơ thú cưng thiết kế dạng thẻ ngang cho từng bé. Quản lý sổ tiêm chủng 7 bệnh, phòng dại, tẩy giun điện tử. Minh bạch thói quen tốt/xấu triệt tiêu 100% nguy cơ cắn nhau ngoài công viên.',
    highlight: 'Huy hiệu Safe Pet & Minh bạch hành vi',
    iconName: 'ShieldCheck',
    colorScheme: 'mint',
  },
  {
    id: 'dual-messaging',
    badge: 'CORE 4: TÁCH BIỆT 2 HỆ THỐNG CHAT',
    title: 'Nhắn Tin Mạng Xã Hội & Hẹn Dạo Trung Điểm',
    description: 'Tách bạch hoàn toàn: Kênh Mạng xã hội nhắn tin tự do giao lưu cộng đồng; Kênh Hẹn hò chỉ mở khi đã Match, tự tính trung điểm đề xuất 3 địa điểm thân thiện Boss (Pet Cafe/Công viên), có nút Hủy Match xóa sạch lịch sử.',
    highlight: 'Gợi ý 3 điểm hẹn trung tâm & Chống bùng kèo',
    iconName: 'MessageCircleHeart',
    colorScheme: 'warning',
  },
];

export const MOCK_PETS: PetCardMock[] = [
  {
    id: 'pet-1',
    name: 'Mochi',
    species: 'Chó',
    breed: 'Corgi Pembroke',
    age: '1.5 tuổi',
    distance: 'Cách bạn 280m',
    apartment: 'Vinhomes Central Park - Park 3',
    avatar: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Biết đi vệ sinh đúng khay', 'Thích hòa đồng với cún nhỏ', 'Được tiêm 7 bệnh & dại đầy đủ'],
    watchOutHabits: ['Hơi sợ tiếng còi xe lớn', 'Hay tranh đồ chơi bóng tennis'],
    personality: ['Năng động', 'Lăng xăng', 'Thèm ăn'],
  },
  {
    id: 'pet-2',
    name: 'Bơ Béo',
    species: 'Chó',
    breed: 'Golden Retriever',
    age: '2 tuổi',
    distance: 'Cách bạn 450m',
    apartment: 'Landmark 4 - Vinhomes Grand Park',
    avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Cực kỳ yêu thương trẻ em', 'Biết bắt tay và ngồi chờ hiệu lệnh', 'Không bao giờ sủa vô cớ'],
    watchOutHabits: ['Thích nhảy xuống hồ bơi công viên'],
    personality: ['Ấm áp', 'Kiên nhẫn', 'Thích bơi'],
  },
  {
    id: 'pet-3',
    name: 'Sâu',
    species: 'Mèo',
    breed: 'Mèo Ba Tư Lông Dài',
    age: '1 tuổi',
    distance: 'Cách bạn 320m',
    apartment: 'Tòa S1.02 Vinhomes Grand Park',
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Đã triệt sản', 'Tiêm phòng đầy đủ', 'Ngoan ngoãn trong túi phi thuyền'],
    watchOutHabits: ['Sợ tiếng chó sủa to'],
    personality: ['Điềm tĩnh', 'Mắt hổ phách', 'Thích vuốt ve'],
  },
  {
    id: 'pet-4',
    name: 'LuLu',
    species: 'Chó',
    breed: 'Poodle Toy',
    age: '2.5 tuổi',
    distance: 'Cách bạn 520m',
    apartment: 'Masteri Thảo Điền - Tháp T2',
    avatar: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Được tỉa lông gấu bông định kỳ', 'Thích kết bạn đi dạo 17h', 'Không kén ăn'],
    watchOutHabits: ['Đôi khi nhảy lên người mừng rỡ'],
    personality: ['Thông minh', 'Quấn chủ', 'Duyên dáng'],
  },
  {
    id: 'pet-5',
    name: 'Bánh Mì',
    species: 'Mèo',
    breed: 'Mèo Anh Lông Ngắn',
    age: '1.2 tuổi',
    distance: 'Cách bạn 600m',
    apartment: 'Park 6 - Chung cư Masteri',
    avatar: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Thích nằm tắm nắng ban công', 'Ăn hạt pate đúng giờ', 'Sổ tiêm đầy đủ'],
    watchOutHabits: ['Không thích người lạ bế đột ngột'],
    personality: ['Chảnh mèo', 'Thích phơi nắng', 'Đáng yêu'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    ownerName: 'Lê Minh Tuấn & Cún LuLu',
    petName: 'Poodle LuLu',
    petType: 'Poodle',
    apartment: 'Cư dân Park 5, Vinhomes Central Park',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Trước đây mỗi lần dắt LuLu đi dạo ở công viên nội khu đều sợ gặp chó dữ cắn nhau. Nhờ Pawty có lọc sổ tiêm và thói quen cún, mình tìm được 3 bạn Poodle cùng tòa dắt chung mỗi 6h chiều cực kỳ an tâm!',
    rating: 5,
  },
  {
    id: 't-2',
    ownerName: 'Nguyễn Thảo Trang',
    petName: 'Mèo Sâu & Simba',
    petType: 'Mèo Ba Tư & Ragdoll',
    apartment: 'Masteri An Phú, TP. Thủ Đức',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Tính năng AI Gemini Vision trong mục SOS đỉnh thực sự! Chỉ cần tải ảnh chụp lên, AI đã tự điền hết đặc điểm giống loài và màu lông để đăng tin tìm kiếm. Cả khu chung cư mình giờ đều cài Pawty.',
    rating: 5,
  },
  {
    id: 't-3',
    ownerName: 'Trần Đăng Khoa',
    petName: 'Corgi Bắp',
    petType: 'Corgi',
    apartment: 'Sala Sarina, TP. Thủ Đức',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Gói Sen VIP 49k/tháng quá hời vì nhận được voucher giảm 35% spa ở ngay shop dưới sảnh tòa nhà. Hơn nữa quẹt thẻ tìm bạn dắt dạo tuần hoàn không bao giờ hết thẻ, có nút hoàn tác khi lỡ tay quẹt nhầm.',
    rating: 5,
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Trợ lý Google Gemini AI Vision trong tính năng SOS hoạt động như thế nào?',
    answer: 'Khi bạn tải một bức ảnh chụp thú cưng từ điện thoại lên, mô hình thị giác đa phương thức Google Gemini 2.5 Flash trên máy chủ Pawty sẽ phân tích ảnh trong vòng 3 giây để tự động xác định chính xác: giống loài, màu lông chủ đạo, phụ kiện (vòng cổ, chuông), và tự động viết một đoạn văn mô tả nhận diện sắc nét. Giúp chủ nuôi tiết kiệm tối đa thời gian trong giây phút khẩn cấp.',
    category: 'AI & SOS Khẩn Cấp',
  },
  {
    question: 'Hệ thống tin nhắn của Pawty khác biệt thế nào giữa Mạng xã hội và Hẹn hò Tinder?',
    answer: 'Pawty tách biệt 2 luồng trò chuyện: 1) Kênh Mạng xã hội cho phép mọi cư dân tự do nhắn tin giao lưu, chia sẻ mẹo nuôi dưỡng; 2) Kênh Hẹn hò & Dắt dạo chỉ kích hoạt khi hai bên đã quẹt Match nhau trên Tinder, tự động đề xuất 3 địa điểm trung điểm thân thiện với thú cưng (Pet Cafe, Công viên), và có nút Hủy tương hợp (Bỏ Match) để xóa sạch cuộc trò chuyện nếu không còn muốn liên lạc.',
    category: 'Trò Chuyện & Hẹn Dạo',
  },
  {
    question: 'Pawty bảo vệ an toàn cho thú cưng và quyền riêng tư cư dân như thế nào?',
    answer: 'Pawty tuân thủ nghiêm ngặt Luật Bảo vệ Dữ liệu Cá nhân số 91/2025/QH15: Không bao giờ hiển thị số phòng hay số tầng căn hộ, chỉ hiển thị tên cụm chung cư và khoảng cách tương đối (ví dụ: "Cách bạn 280m"). Về an toàn thú cưng, Pawty bắt buộc kiểm chứng Sổ tiêm chủng 7 bệnh & dại (Huy hiệu Safe Pet) và minh bạch thói quen để triệt tiêu nguy cơ cắn nhau.',
    category: 'An Toàn & Bảo Mật',
  },
  {
    question: 'Cơ chế quẹt thẻ Tinder vô tận và nút Hoàn tác (Rewind) hoạt động ra sao?',
    answer: 'Cọc thẻ hẹn hò trên Pawty không bao giờ cạn kiệt. Hệ thống tự động tuần hoàn và nạp lại các hồ sơ thú cưng phù hợp trong bán kính bạn chọn. Nếu bạn lỡ tay quẹt trái từ chối một bé dễ thương, bạn chỉ cần bấm nút Hoàn tác (Rewind) để lấy lại thẻ vừa quẹt ngay lập tức.',
    category: 'Radar & Kết Nối',
  },
  {
    question: 'Ứng dụng có miễn phí không? Gói Sen VIP gồm những đặc quyền gì?',
    answer: 'Pawty miễn phí hoàn toàn cho các tính năng cơ bản: Pet Family Passport, sổ tiêm điện tử, quẹt thẻ tìm bạn và mạng xã hội. Gói Sen VIP (49.000đ/tháng thanh toán qua VietQR) mở khóa: quẹt thẻ không giới hạn, vương miện vàng độc quyền, ưu tiên hiển thị hồ sơ x3 và nhận ngay các voucher giảm 35% tại hệ thống Pet Spa & Pet Cafe đối tác nội khu.',
    category: 'Chi Phí & VIP',
  },
];
