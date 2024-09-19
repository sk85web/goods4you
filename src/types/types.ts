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

export type CartFormProps = Pick<ICard, 'title' | 'price' | 'image' | 'id'>;
