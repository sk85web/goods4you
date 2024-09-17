export interface ICard {
  image: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  id: string;
  rating: string;
  category: string;
  quantity: number;
  waranty: number;
  ship: number;
}

export type IShortCard = Pick<ICard, 'title' | 'id' | 'image' | 'price'>;

export interface IFaq {
  question: string;
  answer: string;
  id: number;
}

export interface IProduct {
  id: 144;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface ICart {
  id: string;
  products: IProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface FetchCartsData {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}
