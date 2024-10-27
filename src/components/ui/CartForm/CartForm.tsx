import { useSelector } from 'react-redux';

import styles from './CartForm.module.css';
import CartItem from '../CartItem/CartItem';
import { RootState } from '../../../redux/store';
import { ICartProduct } from '../../../types/types';

const CartForm = () => {
  const { cart, deletedProducts } = useSelector(
    (state: RootState) => state.cart
  );

  const products: ICartProduct[] = cart ? cart.products : [];

  const filteredProducts = products.filter(
    (product) =>
      !deletedProducts.some(
        (deletedProduct) => deletedProduct.id === product.id
      )
  );

  const displayProducts = deletedProducts.length
    ? [...filteredProducts, ...deletedProducts]
    : products;

  return (
    <div className={styles.container}>
      <ul className={styles.cartList}>
        {displayProducts.map((product) => (
          <li key={product.id}>
            <CartItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartForm;
