import { useSelector } from 'react-redux';

import styles from './CartForm.module.css';
import CartItem from '../CartItem/CartItem';
import { RootState } from '../../../redux/store';
import { IProduct } from '../../../types/types';

const CartForm = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  const products: IProduct[] = cart?.products ?? [];
  return (
    <div className={styles.container}>
      <ul className={styles.cartList}>
        {products.map((product) => (
          <li key={product.id}>
            <CartItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartForm;
