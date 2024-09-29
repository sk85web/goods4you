import { NavigateFunction } from 'react-router-dom';

import { ICart, ICartProduct } from '../types/types';
import { AppDispatch } from '../redux/store';
import { updateCart } from '../redux/services/fetchCartsByUserId';
import { discountCounter } from './discountCounter';
import { removeDeletedProduct } from '../redux/slices/cartSlice';

interface AddNewProductToCartProps {
  cart: ICart;
  dispatch: AppDispatch;
  navigate: NavigateFunction;
  error: string | null;
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export const addNewProductToCart = ({
  cart,
  dispatch,
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
}: AddNewProductToCartProps) => {
  const newCartProduct: ICartProduct = {
    id,
    title,
    price,
    quantity: 1,
    total: price,
    discountPercentage,
    discountedTotal: discountCounter(price, discountPercentage),
    thumbnail,
  };

  const updatedProducts = [...(cart.products || []), newCartProduct];

  dispatch(updateCart({ cartId: cart.id, products: updatedProducts }));
  dispatch(removeDeletedProduct(newCartProduct));
};
