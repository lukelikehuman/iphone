
import { Phone, PhoneCondition, Testimonial } from './types';

export const FEATURED_PHONES: Phone[] = [
  {
    id: '1',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    color: '原色鈦金屬',
    price: 32500,
    originalPrice: 44900,
    condition: PhoneCondition.NEW_LIKE,
    imageUrl: 'https://picsum.photos/seed/iphone15pm/400/400',
    tags: ['熱門', '限量'],
    batteryHealth: 99
  },
  {
    id: '2',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    storage: '512GB',
    color: '霧光黑',
    price: 19800,
    originalPrice: 40900,
    condition: PhoneCondition.EXCELLENT,
    imageUrl: 'https://picsum.photos/seed/s23ultra/400/400',
    tags: ['拍照強', '大螢幕'],
    batteryHealth: 96
  },
  {
    id: '3',
    brand: 'Apple',
    model: 'iPhone 14 Pro',
    storage: '128GB',
    color: '深紫色',
    price: 21000,
    originalPrice: 34900,
    condition: PhoneCondition.GOOD,
    imageUrl: 'https://picsum.photos/seed/iphone14p/400/400',
    tags: ['超值'],
    batteryHealth: 88
  },
  {
    id: '4',
    brand: 'Google',
    model: 'Pixel 8 Pro',
    storage: '128GB',
    color: '海灣藍',
    price: 16500,
    originalPrice: 33900,
    condition: PhoneCondition.NEW_LIKE,
    imageUrl: 'https://picsum.photos/seed/pixel8p/400/400',
    tags: ['AI強'],
    batteryHealth: 100
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: '林小姐',
    avatar: 'https://picsum.photos/seed/user1/100/100',
    content: '第一次買二手手機，原本很擔心。沒想到收到後跟新的一樣，包裝也很精美，還有附上檢測報告，非常安心！',
    rating: 5,
    phoneBought: 'iPhone 15 Pro'
  },
  {
    id: 2,
    name: '陳先生',
    avatar: 'https://picsum.photos/seed/user2/100/100',
    content: '價格真的比官網便宜太多了，省下來的錢還可以去吃大餐。推薦給想省錢又想用好手機的人。',
    rating: 5,
    phoneBought: 'Galaxy S23 Ultra'
  },
  {
    id: 3,
    name: '張同學',
    avatar: 'https://picsum.photos/seed/user3/100/100',
    content: '客服回答問題很有耐心，物流也很快，隔天就收到了。這家店的品質管控真的很到位。',
    rating: 4,
    phoneBought: 'Pixel 7'
  }
];
