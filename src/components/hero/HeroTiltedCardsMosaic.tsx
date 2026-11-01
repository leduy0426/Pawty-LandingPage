import React from 'react';

// Curated high quality pet images representing community pets at modern apartments
const PET_CARDS_DATA = [
  {
    name: 'Corgi Mochi',
    breed: 'Corgi Pembroke',
    tag: 'Safe Pet ✓',
    distance: '280m',
    img: 'https://images.unsplash.com/photo-1546975490-a79abdd54533?w=400&auto=format&fit=crop&q=80',
    color: '#FF6F61',
  },
  {
    name: 'Golden Bơ',
    breed: 'Golden Retriever',
    tag: 'Đã tiêm 7 bệnh',
    distance: '450m',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=80',
    color: '#F59E0B',
  },
  {
    name: 'Mèo Bánh Mì',
    breed: 'Scottish Fold',
    tag: 'Đã tiêm phòng dại',
    distance: '150m',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80',
    color: '#06B6D4',
  },
  {
    name: 'Poodle Bông',
    breed: 'Toy Poodle',
    tag: 'Safe Pet ✓',
    distance: '600m',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&auto=format&fit=crop&q=80',
    color: '#8B5CF6',
  },
  {
    name: 'Samoyed Mây',
    breed: 'Samoyed Tuyết',
    tag: 'Thân thiện',
    distance: '1.2km',
    img: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=400&auto=format&fit=crop&q=80',
    color: '#3B82F6',
  },
  {
    name: 'Shiba Kaito',
    breed: 'Shiba Inu',
    tag: 'Safe Pet ✓',
    distance: '320m',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=80',
    color: '#EC4899',
  },
  {
    name: 'Mèo Miu Miu',
    breed: 'British Shorthair',
    tag: 'Triệt sản ✓',
    distance: '500m',
    img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&auto=format&fit=crop&q=80',
    color: '#10B981',
  },
  {
    name: 'Husky Bão',
    breed: 'Siberian Husky',
    tag: 'Ngoan không cắn',
    distance: '850m',
    img: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&auto=format&fit=crop&q=80',
    color: '#6366F1',
  },
  {
    name: 'Phốc Sóc Milo',
    breed: 'Pomeranian',
    tag: 'Safe Pet ✓',
    distance: '400m',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&auto=format&fit=crop&q=80',
    color: '#F97316',
  },
  {
    name: 'Mèo Ragdoll',
    breed: 'Ragdoll Mắt Xanh',
    tag: 'Đã tiêm 7 bệnh',
    distance: '700m',
    img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&auto=format&fit=crop&q=80',
    color: '#14B8A6',
  },
];

// Exact coordinates calculated from Figma 39.7° rotation matrix
const CARD_POSITIONS = [
  // Col 1
  { x: 1607.08, y: -199.286 },
  { x: 1460.16, y: -22.3272 },
  { x: 1313.24, y: 154.631 },
  { x: 1166.32, y: 331.59 },
  { x: 1019.4, y: 508.548 },
  // Col 2
  { x: 1680.54, y: -26.5156 },
  { x: 1533.62, y: 150.443 },
  { x: 1386.7, y: 327.401 },
  { x: 1239.78, y: 504.36 },
  { x: 1092.86, y: 681.318 },
  // Col 3
  { x: 1863.87, y: 13.9204 },
  { x: 1716.95, y: 190.879 },
  { x: 1570.03, y: 367.837 },
  { x: 1423.11, y: 544.796 },
  { x: 1276.19, y: 721.754 },
  // Col 4
  { x: 1900.38, y: 230.714 },
  { x: 1753.46, y: 407.672 },
  { x: 1606.54, y: 584.63 },
  { x: 1459.62, y: 761.589 },
  { x: 1312.7, y: 938.547 },
  // Col 5
  { x: 1936.88, y: 447.507 },
  { x: 1789.96, y: 624.465 },
  { x: 1643.04, y: 801.424 },
  { x: 1496.12, y: 978.382 },
  { x: 1349.2, y: 1155.34 },
];

export const HeroTiltedCardsMosaic: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-35"
      >
        <defs>
          {PET_CARDS_DATA.map((pet, idx) => (
            <pattern
              key={`pet-pat-${idx}`}
              id={`pawty-pet-pattern-${idx}`}
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image
                href={pet.img}
                preserveAspectRatio="xMidYMid slice"
                width="1"
                height="1"
              />
            </pattern>
          ))}
        </defs>

        {CARD_POSITIONS.map((pos, idx) => {
          const pet = PET_CARDS_DATA[idx % PET_CARDS_DATA.length];
          return (
            <g
              key={`mosaic-card-${idx}`}
              transform={`rotate(39.7014 ${pos.x} ${pos.y})`}
            >
              {/* Outer Card Background with drop shadow and border */}
              <rect
                x={pos.x}
                y={pos.y}
                width="154.884"
                height="222"
                rx="16"
                fill={`url(#pawty-pet-pattern-${idx % PET_CARDS_DATA.length})`}
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
              />

              {/* Gradient overlay for readability */}
              <rect
                x={pos.x}
                y={pos.y}
                width="154.884"
                height="222"
                rx="16"
                fill="url(#card-gradient-overlay)"
                opacity="0.6"
              />

              {/* Safe Pet badge top pill */}
              <rect
                x={pos.x + 8}
                y={pos.y + 8}
                width="72"
                height="18"
                rx="9"
                fill="rgba(163, 228, 215, 0.95)"
              />
              <text
                x={pos.x + 44}
                y={pos.y + 20}
                textAnchor="middle"
                fill="#0F766E"
                fontSize="9"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                Safe Pet ✓
              </text>

              {/* Bottom Pet Name & Distance */}
              <rect
                x={pos.x + 6}
                y={pos.y + 172}
                width="142"
                height="42"
                rx="10"
                fill="rgba(15, 23, 42, 0.85)"
              />
              <text
                x={pos.x + 14}
                y={pos.y + 190}
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {pet.name}
              </text>
              <text
                x={pos.x + 14}
                y={pos.y + 204}
                fill="#CBD5E1"
                fontSize="9"
                fontFamily="sans-serif"
              >
                {pet.breed} • {pet.distance}
              </text>
            </g>
          );
        })}

        <linearGradient
          id="card-gradient-overlay"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
        </linearGradient>
      </svg>
    </div>
  );
};

