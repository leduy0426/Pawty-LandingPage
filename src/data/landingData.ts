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
  { value: '12,500+', label: 'Boss đã gia nhập', detail: 'Tăng trưởng 25%/tháng' },
  { value: '100%', label: 'Xác thực tiêm chủng', detail: 'Sổ tiêm & Thói quen minh bạch' },
  { value: '48+', label: 'Cụm chung cư đô thị', detail: 'TP.HCM & Hà Nội' },
  { value: '98.6%', label: 'Hẹn dạo an toàn', detail: '0 vụ xung đột ngoài công viên' },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'safe-care',
    badge: 'CORE 1: AN TOÀN TUYỆT ĐỐI',
    title: 'Sổ Tiêm Điện Tử & Lịch Nhắc Chăm Sóc',
    description: 'Lưu trữ hồ sơ tiêm chủng 7 bệnh, phòng dại, tẩy giun. Tự động nhắc lịch khám định kỳ và cấp huy hiệu Safe Pet an tâm tuyệt đối.',
    highlight: 'Huy hiệu Xanh Mint kiểm chứng',
    iconName: 'ShieldCheck',
    colorScheme: 'mint',
  },
  {
    id: 'radar-walk',
    badge: 'CORE 2: BẢN ĐỒ POSTGIS 3KM',
    title: 'Radar Quẹt Thẻ Tìm Bạn Dắt Dạo',
    description: 'Khám phá các Boss hàng xóm trong bán kính 500m - 3km. Quẹt phải gửi tín hiệu kết nối, quẹt trái bỏ qua. Khớp đôi bắn pháo hoa Confetti tức thì!',
    highlight: 'Định vị chính xác từng cụm căn hộ',
    iconName: 'Compass',
    colorScheme: 'coral',
  },
  {
    id: 'date-chat',
    badge: 'CORE 3: KẾT NỐI KHÔNG BÙNG HÈN',
    title: 'Chat Real-time & Hẹn Dạo Trung Điểm',
    description: 'Hệ thống tự động tính điểm hẹn trung tâm (Pet-friendly Cafe, Công viên nội khu). Cơ chế phạt bùng kèo tự động khóa tài khoản nếu vắng mặt.',
    highlight: 'Gợi ý 3 địa điểm thân thiện Boss',
    iconName: 'MessageCircleHeart',
    colorScheme: 'warning',
  },
  {
    id: 'sos-trace',
    badge: 'CORE 4: KHẨN CẤP ĐÔ THỊ',
    title: 'Báo Động Tìm Boss Lạc SOS 3km',
    description: 'Kích hoạt báo động khẩn cấp chỉ 39.000đ qua VietQR động. Hệ thống phát sóng Push Notification đến toàn bộ cư dân nuôi thú trong bán kính 3km.',
    highlight: 'Tốc độ phản ứng trong 30 giây',
    iconName: 'Flame',
    colorScheme: 'danger',
  },
];

export const MOCK_PETS: PetCardMock[] = [
  {
    id: 'pet-1',
    name: 'Mochi',
    breed: 'Corgi Mông Trái Tim',
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
    breed: 'Golden Retriever hiền lành',
    age: '2 tuổi',
    distance: 'Cách bạn 450m',
    apartment: 'Landmark 4 - Tầng 12',
    avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Cực kỳ yêu thương trẻ em', 'Biết bắt tay và ngồi chờ hiệu lệnh', 'Không bao giờ sủa vô cớ'],
    watchOutHabits: ['Thích nhảy xuống hồ bơi công viên'],
    personality: ['Ấm áp', 'Kiên nhẫn', 'Thích bơi'],
  },
  {
    id: 'pet-3',
    name: 'Bánh Mì',
    breed: 'Mèo Anh Lông Ngắn',
    age: '1 tuổi',
    distance: 'Cách bạn 600m',
    apartment: 'Park 6 - Chung cư Masteri',
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    goodHabits: ['Đã triệt sản', 'Tiêm phòng đầy đủ', 'Ngoan ngoãn trong túi phi thuyền'],
    watchOutHabits: ['Sợ chó dữ sủa to'],
    personality: ['Chảnh mèo', 'Thích phơi nắng', 'Điềm tĩnh'],
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
    quote: 'Trước đây mỗi lần dắt LuLu đi dạo ở công viên nội khu đều sợ gặp chó dữ cắn nhau. Nhờ Pawty có lọc sổ tiêm và thói quen cún, mình tìm được 3 bạn Poodle cùng tòa dắt chung mỗi 6h chiều cực kỳ vui!',
    rating: 5,
  },
  {
    id: 't-2',
    ownerName: 'Nguyễn Thảo Trang',
    petName: 'Mèo Simba',
    petType: 'Mèo Ragdoll',
    apartment: 'Masteri An Phú, Quận 2',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Tính năng sổ tiêm và vòng chăm sóc gia đình tiện vô cùng. Chồng mình với mình không bao giờ bị quên lịch tẩy giun hay tiêm dại nữa. Rất đáng đồng tiền bát gạo!',
    rating: 5,
  },
  {
    id: 't-3',
    ownerName: 'Trần Đăng Khoa',
    petName: 'Corgi Bắp',
    petType: 'Corgi',
    apartment: 'Sala Sarina, TP. Thủ Đức',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Gói Sen VIP 49k/tháng quá hời vì nhận được voucher giảm 35% spa ở ngay shop dưới sảnh tòa nhà. Hơn nữa quẹt thẻ tìm bạn dắt dạo không giới hạn.',
    rating: 5,
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Pawty bảo vệ an toàn cho thú cưng khi đi dạo như thế nào?',
    answer: 'Pawty áp dụng bộ 3 tiêu chuẩn khắt khe: 1) Xác thực sổ tiêm phòng 7 bệnh & dại trước khi cấp huy hiệu Safe Pet. 2) Minh bạch thói quen tốt và thói quen cần lưu ý (sợ tiếng ồn, bảo vệ đồ ăn) trên profile để tránh xung đột. 3) Cơ chế chế tài bùng hẹn: khóa quyền quẹt thẻ 3 ngày nếu vắng mặt không lý do.',
    category: 'An Toàn',
  },
  {
    question: 'Bán kính quét radar của ứng dụng là bao xa?',
    answer: 'Mặc định Radar quét bạn bè trong bán kính linh hoạt từ 500m đến 3km tính từ vị trí GPS thực tế hoặc tòa nhà chung cư bạn đã đăng ký. Bạn có thể mở rộng bán kính lên 10km nếu nâng cấp gói Sen VIP.',
    category: 'Radar & Kết Nối',
  },
  {
    question: 'Tính năng SOS Báo Động Tìm Boss Lạc hoạt động ra sao?',
    answer: 'Khi Boss không may đi lạc, bạn chỉ cần tải ảnh và vị trí cuối cùng nhìn thấy lên ứng dụng, thanh toán 39.000đ qua mã VietQR quét tức thì. Hệ thống sẽ ngay lập tức gửi thông báo đẩy khẩn cấp (Push Notification kèm âm thanh đặc biệt) đến toàn bộ chủ nuôi trong bán kính 3km để tạo mạng lưới tìm kiếm diện rộng.',
    category: 'SOS Khẩn Cấp',
  },
  {
    question: 'Ứng dụng có miễn phí không? Gói Sen VIP gồm những gì?',
    answer: 'Pawty miễn phí hoàn toàn cho các tính năng cốt lõi: tạo hồ sơ Boss, sổ tiêm điện tử, quẹt thẻ tìm bạn cơ bản và chat hẹn dạo. Gói Sen VIP (49.000đ/tháng) cung cấp thêm: quẹt thẻ không giới hạn, xem ai đã thích Boss của bạn, vương miện vàng nổi bật và nhận hàng loạt voucher giảm giá 35% từ đối tác Pet Spa & Pet Cafe.',
    category: 'Chi Phí & Gói Cước',
  },
];

