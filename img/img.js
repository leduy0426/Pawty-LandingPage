/**
 * PAWTY SUPER APP - LANDING PAGE VECTOR & COMPONENT ASSETS
 * Adapted from Figma 1920x1080 Cover Design & Mobile Mockups
 * Converted specifically for Pawty Pet Super App
 */

// 1. Grid of 28 Community Pets for the 39.7° Tilted Cards Mosaic
export const PAWTY_MOSAIC_PETS = [
  {
    id: 'pet-1',
    name: 'Corgi Mochi',
    breed: 'Corgi Pembroke',
    tag: 'Safe Pet ✓',
    distance: '280m',
    apartment: 'Vinhomes Central Park',
    img: 'https://images.unsplash.com/photo-1546975490-a79abdd54533?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-2',
    name: 'Golden Bơ',
    breed: 'Golden Retriever',
    tag: 'Đã tiêm 7 bệnh',
    distance: '450m',
    apartment: 'Masteri Thảo Điền',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-3',
    name: 'Mèo Bánh Mì',
    breed: 'Scottish Fold',
    tag: 'Safe Pet ✓',
    distance: '150m',
    apartment: 'Sala Đại Quang Minh',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-4',
    name: 'Poodle Bông',
    breed: 'Toy Poodle',
    tag: 'Safe Pet ✓',
    distance: '600m',
    apartment: 'The Manor',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-5',
    name: 'Samoyed Mây',
    breed: 'Samoyed Tuyết',
    tag: 'Thân thiện',
    distance: '1.2km',
    apartment: 'Vinhomes Grand Park',
    img: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-6',
    name: 'Shiba Kaito',
    breed: 'Shiba Inu',
    tag: 'Safe Pet ✓',
    distance: '320m',
    apartment: 'Landmark 81',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-7',
    name: 'Mèo Miu Miu',
    breed: 'British Shorthair',
    tag: 'Triệt sản ✓',
    distance: '500m',
    apartment: 'Eco Green Saigon',
    img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pet-8',
    name: 'Husky Bão',
    breed: 'Siberian Husky',
    tag: 'Ngoan không cắn',
    distance: '850m',
    apartment: 'Phú Mỹ Hưng',
    img: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&auto=format&fit=crop&q=80',
  },
];

// 2. Exact Figma 39.7° Card Coordinates in 1920x1080 ViewBox
export const FIGMA_MOSAIC_COORDINATES = [
  { x: 1607.08, y: -199.286 },
  { x: 1460.16, y: -22.3272 },
  { x: 1313.24, y: 154.631 },
  { x: 1166.32, y: 331.59 },
  { x: 1019.4, y: 508.548 },
  { x: 1680.54, y: -26.5156 },
  { x: 1533.62, y: 150.443 },
  { x: 1386.7, y: 327.401 },
  { x: 1239.78, y: 504.36 },
  { x: 1092.86, y: 681.318 },
  { x: 1863.87, y: 13.9204 },
  { x: 1716.95, y: 190.879 },
  { x: 1570.03, y: 367.837 },
  { x: 1423.11, y: 544.796 },
  { x: 1276.19, y: 721.754 },
  { x: 1900.38, y: 230.714 },
  { x: 1753.46, y: 407.672 },
  { x: 1606.54, y: 584.63 },
  { x: 1459.62, y: 761.589 },
  { x: 1312.7, y: 938.547 },
  { x: 1936.88, y: 447.507 },
  { x: 1789.96, y: 624.465 },
  { x: 1643.04, y: 801.424 },
  { x: 1496.12, y: 978.382 },
  { x: 1349.2, y: 1155.34 },
];

// 3. Pawty Hero SVG Cover (1920x1080)
export const PAWTY_COVER_SVG = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pawty_sunset_gradient" x1="0" y1="0" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FF1E56" />
      <stop offset="35%" stop-color="#D926A9" />
      <stop offset="70%" stop-color="#7C3AED" />
      <stop offset="100%" stop-color="#1E1B4B" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#pawty_sunset_gradient)" />
  <!-- Wave decoration at bottom -->
  <path d="M0,960V1080H1920V960C1700,1020 1400,980 1100,1010C800,1040 500,970 0,960Z" fill="#FDFBF7" />
</svg>
`;

// 4. Pawty App Brand Icon SVG
export const PAWTY_ICON_SVG = `
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="120" rx="32" fill="#FF6F61" />
  <!-- Party Hat in Mint -->
  <path d="M35 30 L60 8 L85 30 Z" fill="#A3E4D7" />
  <!-- Paw print circle -->
  <circle cx="60" cy="70" r="22" fill="#FFFFFF" />
  <circle cx="42" cy="46" r="9" fill="#FFFFFF" />
  <circle cx="60" cy="40" r="9" fill="#FFFFFF" />
  <circle cx="78" cy="46" r="9" fill="#FFFFFF" />
</svg>
`;

export default {
  PAWTY_MOSAIC_PETS,
  FIGMA_MOSAIC_COORDINATES,
  PAWTY_COVER_SVG,
  PAWTY_ICON_SVG,
};
