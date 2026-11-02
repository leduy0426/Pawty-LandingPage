export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
  colorScheme: 'coral' | 'mint' | 'warning' | 'danger';
}

export interface PetItemMock {
  id: string;
  name: string;
  species: 'Chó' | 'Mèo';
  breed: string;
  age: string;
  avatar: string;
  isVaccinated: boolean;
  personality: string[];
  goodHabits: string[];
  watchOutHabits: string[];
}

export interface DatingProfileMock {
  id: string;
  // Compatibility fields
  name: string;
  species: 'Chó' | 'Mèo';
  breed: string;
  age: string;
  distance: string;
  apartment: string;
  avatar: string;
  isVaccinated: boolean;
  personality: string[];
  goodHabits: string[];
  watchOutHabits: string[];

  // Owner Info (Mặt trước - Front Face)
  ownerName: string;
  ownerAge: number;
  ownerAvatar: string;
  ownerJob: string;
  ownerBio: string;
  ownerArea: string;
  connectionGoal: string;
  ownerTags: string[];

  // Danh sách TẤT CẢ CÁC PET CỦA CHỦ ĐÓ (Mặt sau)
  pets: PetItemMock[];

  // Primary Pet Info (Mặt sau - Back Face default)
  petName: string;
  petAge: string;
  petAvatar: string;
}

export type PetCardMock = DatingProfileMock;

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

export const KEY_STATS = [
  { value: '100% Miễn Phí', label: 'Trọn đời cho mọi chủ nuôi', detail: 'Không thu phí gói cước' },
  { value: '1,200+', label: 'Người nuôi pet đã kết nối', detail: 'Cộng đồng Sen & Boss đô thị' },
  { value: 'Tự Nguyện', label: 'Tự khai báo tiêm phòng', detail: 'Chủ nuôi chủ động cập nhật sổ tiêm' },
  { value: 'Bán Kính 3km', label: 'Kết nối khu vực quanh bạn', detail: 'Hẹn dạo trung điểm gần nhà' },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'social-feed',
    badge: 'CORE 1: MẠNG XÃ HỘI CHUẨN FACEBOOK',
    title: 'Bảng Tin Khoảnh Khắc & Cộng Đồng Chủ Nuôi',
    description: 'Bảng tin chia sẻ hình ảnh, video hằng ngày của Boss (chuẩn phong cách Facebook & Instagram). Thả tim, bình luận, gắn hashtag tự do và kết nối cùng hàng ngàn chủ nuôi yêu động vật trong khu vực quanh bạn.',
    highlight: 'Chia sẻ khoảnh khắc & Giao lưu cộng đồng',
    iconName: 'Users',
    colorScheme: 'coral',
  },
  {
    id: 'pawty-dating',
    badge: 'CORE 2: HẸN HÒ PHONG CÁCH FB DATING',
    title: 'Pawty Dating — Thẻ 2 Mặt Kết Nối Sen & Boss',
    description: 'Không gian hẹn dạo độc đáo kết nối trực tiếp những người nuôi thú cưng. Thẻ 2 mặt sáng tạo: xem thông tin chủ nuôi ở mặt trước, lật thẻ xem thông tin Boss ở mặt sau. Gửi lời mời dắt dạo và tự động đề xuất điểm hẹn an toàn.',
    highlight: 'Thẻ 2 mặt Sen & Boss • Hẹn dạo trung điểm',
    iconName: 'HeartHandshake',
    colorScheme: 'warning',
  },
  {
    id: 'sos-network',
    badge: 'CORE 3: BÁO ĐỘNG SOS THÚ LẠC 3KM',
    title: 'Cứu Hộ Thất Lạc Khẩn Cấp Bán Kính 3km',
    description: 'Khi Boss không may đi lạc, chủ nuôi phát tín hiệu báo động khẩn cấp tới toàn bộ cộng đồng trong bán kính 3km kèm ảnh, vị trí cuối nhìn thấy và tiền hậu tạ. Người xung quanh báo manh mối thời gian thực để đón bé về an toàn.',
    highlight: 'Mạng lưới cứu hộ 3km & Manh mối tức thì',
    iconName: 'AlertTriangle',
    colorScheme: 'danger',
  },
  {
    id: 'safe-passport',
    badge: 'CORE 4: PET FAMILY PASSPORT',
    title: 'Hồ Sơ Thú Cưng & Khai Báo Tiêm Phòng',
    description: 'Hồ sơ thú cưng thiết kế dạng thẻ thông minh. Chủ nuôi tự tích chọn trạng thái tiêm phòng, chia sẻ thói quen tốt và lưu ý khi đi dạo để các bên an tâm trao đổi trước khi hẹn gặp ngoài đời.',
    highlight: 'Tự khai báo tiêm phòng & Thói quen dắt dạo',
    iconName: 'ShieldCheck',
    colorScheme: 'mint',
  },
];

export const MOCK_DATING_PROFILES: DatingProfileMock[] = [
  {
    id: 'profile-1',
    name: 'Bơ Béo',
    species: 'Chó',
    breed: 'Golden Retriever',
    age: '2 tuổi',
    distance: 'Cách bạn 450m',
    apartment: 'Quận Bình Thạnh, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    personality: ['Ấm áp', 'Kiên nhẫn', 'Thích bơi'],
    goodHabits: ['Cực kỳ yêu thương trẻ em', 'Biết bắt tay và ngồi chờ hiệu lệnh', 'Không bao giờ sủa vô cớ'],
    watchOutHabits: ['Thích nhảy xuống hồ bơi công viên'],

    ownerName: 'Lê Minh Tuấn',
    ownerAge: 26,
    ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    ownerJob: 'Kỹ sư phần mềm',
    ownerBio: 'Làm việc remote nên rảnh rỗi chiều tối hay dắt Golden đi dạo xả stress. Mong kết nối các bạn nuôi pet cùng gu để cún có bạn chạy nhảy và giao lưu cafe!',
    ownerArea: 'P.25, Quận Bình Thạnh, TP.HCM',
    connectionGoal: 'Tìm bạn dắt cún dạo chiều & cafe',
    ownerTags: ['YêuCún', 'ThíchBơi', 'CafeCuốiTuần'],

    petName: 'Bơ Béo',
    petAge: '2 tuổi',
    petAvatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',

    // Danh sách TẤT CẢ PET CỦA TUẤN (2 bé)
    pets: [
      {
        id: 'p1-pet1',
        name: 'Bơ Béo',
        species: 'Chó',
        breed: 'Golden Retriever',
        age: '2 tuổi',
        avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Ấm áp', 'Kiên nhẫn', 'Thích bơi'],
        goodHabits: ['Cực kỳ yêu thương trẻ em', 'Biết bắt tay và ngồi chờ hiệu lệnh', 'Không sủa vô cớ'],
        watchOutHabits: ['Thích nhảy xuống hồ bơi công viên'],
      },
      {
        id: 'p1-pet2',
        name: 'Miu Miu',
        species: 'Mèo',
        breed: 'Mèo Anh Lông Ngắn',
        age: '1 tuổi',
        avatar: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Quấn chủ', 'Thích ngủ nướng', 'Ngoan ngoãn'],
        goodHabits: ['Ăn hạt đúng giờ', 'Biết đi vệ sinh đúng khay cát', 'Đã tiêm phòng'],
        watchOutHabits: ['Hơi nhút nhát khi gặp cún to'],
      },
    ],
  },
  {
    id: 'profile-2',
    name: 'Mochi',
    species: 'Chó',
    breed: 'Corgi Pembroke',
    age: '1.5 tuổi',
    distance: 'Cách bạn 280m',
    apartment: 'TP. Thủ Đức, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    personality: ['Năng động', 'Lăng xăng', 'Thèm ăn'],
    goodHabits: ['Biết đi vệ sinh đúng khay', 'Thích hòa đồng với cún nhỏ', 'Đã tiêm phòng vắc-xin'],
    watchOutHabits: ['Hơi sợ tiếng còi xe lớn', 'Hay tranh đồ chơi bóng tennis'],

    ownerName: 'Hoàng Nam',
    ownerAge: 27,
    ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    ownerJob: 'Nhiếp ảnh gia tự do',
    ownerBio: 'Mình hay dắt Corgi đi dạo công viên bờ sông tầm 17h - 18h30. Rất thích chụp ảnh cho các bé cún và kết bạn với những bạn yêu động vật!',
    ownerArea: 'P. Thảo Điền, TP. Thủ Đức',
    connectionGoal: 'Tìm bạn dắt cún dạo bờ sông',
    ownerTags: ['NhiếpẢnh', 'YêuCorgi', 'DạoBờSông'],

    petName: 'Mochi',
    petAge: '1.5 tuổi',
    petAvatar: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',

    // Danh sách TẤT CẢ PET CỦA NAM (2 bé)
    pets: [
      {
        id: 'p2-pet1',
        name: 'Mochi',
        species: 'Chó',
        breed: 'Corgi Pembroke',
        age: '1.5 tuổi',
        avatar: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Năng động', 'Lăng xăng', 'Thèm ăn'],
        goodHabits: ['Biết đi vệ sinh đúng khay', 'Thích hòa đồng với cún nhỏ', 'Đã tiêm phòng vắc-xin'],
        watchOutHabits: ['Hơi sợ tiếng còi xe lớn', 'Hay tranh đồ chơi bóng tennis'],
      },
      {
        id: 'p2-pet2',
        name: 'Bắp',
        species: 'Chó',
        breed: 'Poodle Toy Màu Nâu',
        age: '8 tháng',
        avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Thông minh', 'Quấn chân', 'Hiếu động'],
        goodHabits: ['Đang học lệnh cơ bản', 'Thích chơi nhặt bóng', 'Đã tiêm 2 mũi'],
        watchOutHabits: ['Thích nhảy mừng khi thấy người quen'],
      },
    ],
  },
  {
    id: 'profile-3',
    name: 'Sâu',
    species: 'Mèo',
    breed: 'Mèo Ba Tư Lông Dài',
    age: '1 tuổi',
    distance: 'Cách bạn 320m',
    apartment: 'Quận 1, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    personality: ['Điềm tĩnh', 'Mắt hổ phách', 'Thích vuốt ve'],
    goodHabits: ['Đã triệt sản', 'Tiêm phòng đầy đủ', 'Ngoan ngoãn trong túi phi thuyền'],
    watchOutHabits: ['Sợ tiếng chó sủa to'],

    ownerName: 'Nguyễn Thảo Trang',
    ownerAge: 24,
    ownerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    ownerJob: 'Sáng tạo nội dung (Content Creator)',
    ownerBio: 'Nuôi hai bé mèo đáng yêu. Cuối tuần thường cho bé đi picnic công viên trong balo phi thuyền thoáng mát. Rất vui được kết nối hội Sen nuôi mèo!',
    ownerArea: 'P. Bến Nghé, Quận 1, TP.HCM',
    connectionGoal: 'Giao lưu hội Sen nuôi Mèo',
    ownerTags: ['MêMèo', 'Picnic', 'ChillCuốiTuần'],

    petName: 'Sâu',
    petAge: '1 tuổi',
    petAvatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',

    // Danh sách TẤT CẢ PET CỦA TRANG (2 bé)
    pets: [
      {
        id: 'p3-pet1',
        name: 'Sâu',
        species: 'Mèo',
        breed: 'Mèo Ba Tư Lông Dài',
        age: '1 tuổi',
        avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Điềm tĩnh', 'Mắt hổ phách', 'Thích vuốt ve'],
        goodHabits: ['Đã triệt sản', 'Tiêm phòng đầy đủ', 'Ngoan ngoãn trong túi phi thuyền'],
        watchOutHabits: ['Sợ tiếng chó sủa to'],
      },
      {
        id: 'p3-pet2',
        name: 'Simba',
        species: 'Mèo',
        breed: 'Ragdoll Mắt Xanh',
        age: '1.5 tuổi',
        avatar: 'https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Dịu dàng', 'Lông xù mềm', 'Thích nằm lòng'],
        goodHabits: ['Rất hiền lành', 'Không cào đồ đạc', 'Đã tiêm phòng'],
        watchOutHabits: ['Khá nhút nhát ở nơi đông người'],
      },
    ],
  },
  {
    id: 'profile-4',
    name: 'LuLu',
    species: 'Chó',
    breed: 'Poodle Toy',
    age: '2.5 tuổi',
    distance: 'Cách bạn 520m',
    apartment: 'Cầu Giấy, Hà Nội',
    avatar: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    personality: ['Thông minh', 'Quấn chủ', 'Duyên dáng'],
    goodHabits: ['Được tỉa lông gấu bông định kỳ', 'Thích kết bạn đi dạo 17h', 'Không kén ăn'],
    watchOutHabits: ['Đôi khi nhảy lên người mừng rỡ'],

    ownerName: 'Vũ Hoàng My',
    ownerAge: 25,
    ownerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    ownerJob: 'Chuyên viên Marketing',
    ownerBio: 'Poodle nhà mình rất thân thiện và thích kết bạn. Tìm bạn dắt dạo cùng quanh công viên vào các buổi tối sau giờ tan làm!',
    ownerArea: 'P. Dịch Vọng, Cầu Giấy, Hà Nội',
    connectionGoal: 'Tìm bạn dắt dạo buổi tối 19h',
    ownerTags: ['DạoTối', 'YêuThương', 'CúnNhỏ'],

    petName: 'LuLu',
    petAge: '2.5 tuổi',
    petAvatar: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80',

    // Danh sách TẤT CẢ PET CỦA MY (2 bé)
    pets: [
      {
        id: 'p4-pet1',
        name: 'LuLu',
        species: 'Chó',
        breed: 'Poodle Toy Trắng',
        age: '2.5 tuổi',
        avatar: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Thông minh', 'Quấn chủ', 'Duyên dáng'],
        goodHabits: ['Được tỉa lông gấu bông định kỳ', 'Thích kết bạn đi dạo 17h', 'Không kén ăn'],
        watchOutHabits: ['Đôi khi nhảy lên người mừng rỡ'],
      },
      {
        id: 'p4-pet2',
        name: 'Đậu Đậu',
        species: 'Chó',
        breed: 'Beagle Ba Màu',
        age: '1 tuổi',
        avatar: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Tò mò', 'Mũi thính', 'Thân thiện'],
        goodHabits: ['Thích chạy bộ', 'Hòa đồng với mọi người', 'Đã tiêm phòng'],
        watchOutHabits: ['Hay đánh hơi đồ ăn ven đường'],
      },
    ],
  },
  {
    id: 'profile-5',
    name: 'Bánh Mì',
    species: 'Mèo',
    breed: 'Mèo Anh Lông Ngắn',
    age: '1.2 tuổi',
    distance: 'Cách bạn 600m',
    apartment: 'Quận 7, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
    isVaccinated: true,
    personality: ['Chảnh mèo', 'Thích phơi nắng', 'Đáng yêu'],
    goodHabits: ['Thích nằm tắm nắng ban công', 'Ăn hạt pate đúng giờ', 'Đã tiêm phòng'],
    watchOutHabits: ['Không thích người lạ bế đột ngột'],

    ownerName: 'Trần Đăng Khoa',
    ownerAge: 28,
    ownerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    ownerJob: 'Kiến trúc sư',
    ownerBio: 'Sen của một bé Mèo Anh lông ngắn đáng yêu. Rất thích chia sẻ kinh nghiệm chăm sóc pet và hay ghé các quán cafe thú cưng vào cuối tuần.',
    ownerArea: 'P. Tân Phong, Quận 7, TP.HCM',
    connectionGoal: 'Kết bạn giao lưu kinh nghiệm nuôi thú cưng',
    ownerTags: ['KiếnTrúc', 'MèoAnh', 'DinhDưỡngPet'],

    petName: 'Bánh Mì',
    petAge: '1.2 tuổi',
    petAvatar: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',

    // Danh sách TẤT CẢ PET CỦA KHOA (2 bé)
    pets: [
      {
        id: 'p5-pet1',
        name: 'Bánh Mì',
        species: 'Mèo',
        breed: 'Mèo Anh Lông Ngắn Xám',
        age: '1.2 tuổi',
        avatar: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Chảnh mèo', 'Thích phơi nắng', 'Đáng yêu'],
        goodHabits: ['Thích nằm tắm nắng ban công', 'Ăn hạt pate đúng giờ', 'Đã tiêm phòng'],
        watchOutHabits: ['Không thích người lạ bế đột ngột'],
      },
      {
        id: 'p5-pet2',
        name: 'Bơ Ngọt',
        species: 'Mèo',
        breed: 'Munchkin Chân Ngắn',
        age: '10 tháng',
        avatar: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80',
        isVaccinated: true,
        personality: ['Chân ngắn cũn', 'Tăng động', 'Dễ thương'],
        goodHabits: ['Quấn chủ', 'Thích leo trèo', 'Đã tiêm vắc-xin'],
        watchOutHabits: ['Hay nghịch cuộn len'],
      },
    ],
  },
];

export const MOCK_PETS = MOCK_DATING_PROFILES;

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    ownerName: 'Lê Minh Tuấn & Cún LuLu',
    petName: 'Poodle LuLu',
    petType: 'Poodle',
    apartment: 'Quận Bình Thạnh, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Mô hình vừa có Bảng tin khoảnh khắc giao lưu, vừa có mục Pawty Dating tìm bạn dắt cún quá tiện lợi! Mình tìm được các bạn nuôi cún gần nhà cùng dắt mỗi chiều cực kỳ vui vẻ.',
    rating: 5,
  },
  {
    id: 't-2',
    ownerName: 'Nguyễn Thảo Trang',
    petName: 'Mèo Sâu & Simba',
    petType: 'Mèo Ba Tư & Ragdoll',
    apartment: 'TP. Thủ Đức, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Tính năng Báo tin SOS tìm thú lạc trong khu vực cực kỳ hữu ích! Bé Mèo nhà mình chạy lạc ra ngõ, vừa đăng tin là hàng xóm xung quanh báo ngay vị trí để đón bé về an toàn trong 20 phút.',
    rating: 5,
  },
  {
    id: 't-3',
    ownerName: 'Trần Đăng Khoa',
    petName: 'Corgi Bắp',
    petType: 'Corgi',
    apartment: 'Quận 7, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Thích nhất là ứng dụng hoàn toàn miễn phí trọn đời cho cộng đồng, không bị giới hạn tính năng hay bắt mua gói cước. Thẻ lật 2 mặt xem được cả thông tin chủ lẫn thông tin thú cưng rất thông minh!',
    rating: 5,
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Pawty hoạt động như thế nào? Thẻ hẹn dạo 2 mặt Sen & Boss là gì?',
    answer: 'Pawty là ứng dụng kết nối trực tiếp những người nuôi thú cưng (Pet Owners). Trong không gian Pawty Dating, mỗi hồ sơ được thiết kế dạng thẻ lật 2 mặt độc đáo: Mặt trước là hình ảnh và thông tin của Chủ nuôi (Sen); khi bạn chạm nhẹ vào thẻ, thẻ sẽ xoay lại và hiển thị đầy đủ hình ảnh, giống loài, tính cách của các bé Boss cưng. Bạn có thể bấm nút mũi tên trái/phải trên thẻ để xem tất cả các bé pet của người chủ đó, và bấm nút ở dưới để xem người khác hoặc gửi lời mời dắt dạo.',
    category: 'Mô Hình Hoạt Động',
  },
  {
    question: 'Ứng dụng có thu phí người dùng không? Có các gói cước VIP không?',
    answer: 'Không! Pawty là siêu ứng dụng phục vụ cộng đồng và hoàn toàn MIỄN PHÍ TRỌN ĐỜI cho mọi chủ nuôi. Bạn được sử dụng 100% tính năng: Mạng xã hội khoảnh khắc, Pawty Dating kết nối bạn dắt dạo, Sổ ghi chép thú cưng mà không phải trả bất kỳ khoản phí nào.',
    category: 'Chi Phí Sử Dụng',
  },
  {
    question: 'Tính năng Báo tin SOS tìm Boss lạc hoạt động như thế nào?',
    answer: 'Khi Boss bị thất lạc, bạn tạo tin báo động SOS với ảnh chụp, đặc điểm nhận dạng, vị trí cuối nhìn thấy và tiền hậu tạ. Tin báo lập tức phát sóng tới cộng đồng trong bán kính 3km. Bất kỳ ai nhìn thấy bé đều có thể gửi manh mối vị trí kèm hình ảnh hoặc liên hệ trực tiếp với bạn để đón bé về an toàn.',
    category: 'Cứu Hộ SOS Khẩn Cấp',
  },
  {
    question: 'Vấn đề tiêm chủng và an toàn khi hẹn dắt dạo được quản lý ra sao?',
    answer: 'Pawty tôn trọng tính tự nguyện và chủ động của cộng đồng: Chủ nuôi tự tích chọn xác nhận tình trạng đã tiêm phòng vắc-xin cho thú cưng và công khai thói quen dắt dạo (thói quen tốt, điểm cần lưu ý). Hai bên chủ nuôi có thể nhắn tin trao đổi kỹ lưỡng trước khi quyết định cùng dắt dạo ngoài đời.',
    category: 'An Toàn & Tiêm Chủng',
  },
];
