import { ICart } from '../types/types';
import { AppDispatch } from '../redux/store';
import { updateCart } from '../redux/services/fetchCartsByUserId';
import { discountCounter } from './discountCounter';
import { NavigateFunction } from 'react-router-dom';
// import { removeUser } from '../redux/slices/userSlice';

interface RemoveExistedProductFromCart {
  cart: ICart;
  dispatch: AppDispatch;
  navigate: NavigateFunction;
  error: string | null;
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  fullDelete?: boolean;
}

export const removeExistedProductFromCart = ({
  cart,
  dispatch,
  // navigate,
  // error,
  id,
  discountPercentage,
  fullDelete = false,
}: RemoveExistedProductFromCart) => {
  // if (error === 'Unauthorized') {
  //   dispatch(removeUser());
  //   localStorage.removeItem('token');
  //   navigate('/login');
  //   return;
  // }

  const existingProductIndex = cart.products.findIndex(
    (product) => product.id === id
  );

  if (existingProductIndex !== -1) {
    const existingProduct = cart.products[existingProductIndex];
    const updatedProduct = {
      ...existingProduct,
      quantity: fullDelete ? 0 : existingProduct.quantity - 1,
      total: fullDelete
        ? 0
        : existingProduct.price * (existingProduct.quantity - 1),
      discountedTotal: fullDelete
        ? 0
        : discountCounter(
            existingProduct.price * (existingProduct.quantity - 1),
            discountPercentage
          ),
    };

    const updatedProducts = [...cart.products];
    updatedProducts[existingProductIndex] = updatedProduct;

    dispatch(updateCart({ cartId: cart.id, products: updatedProducts }));
  }
};
