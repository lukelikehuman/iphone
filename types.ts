
export enum PhoneCondition {
  NEW_LIKE = '99新 (近全新)',
  EXCELLENT = '95新 (極佳)',
  GOOD = '90新 (良好)',
  FAIR = '85新 (正常使用痕跡)'
}

export interface Phone {
  id: string;
  brand: string;
  model: string;
  storage: string;
  color: string;
  price: number;
  originalPrice: number;
  condition: PhoneCondition;
  imageUrl: string;
  tags: string[];
  batteryHealth: number;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  phoneBought: string;
}
