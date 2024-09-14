import styles from './CartForm.module.css';
import CartItem from '../CartItem/CartItem';
import { CartFormProps } from '../../../types/types';

const CartForm = ({ products }: { products: CartFormProps[] }) => {
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
