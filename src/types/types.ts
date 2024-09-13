export interface ICard {
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  id: string;
  rating: string;
  category: string;
  quantity: number;
  waranty: number;
  ship: number;
}

export interface IFaq {
  question: string;
  answer: string;
  id: number;
}
