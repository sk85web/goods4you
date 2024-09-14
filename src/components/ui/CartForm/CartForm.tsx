import styles from './CartForm.module.css';
import CartItem from '../CartItem/CartItem';
import { CartFormProps } from '../../../types/types';

const CartForm = ({ cards }: { cards: CartFormProps[] }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.cartList}>
        {cards.map((card) => (
          <li key={card.id}>
            <CartItem card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartForm;
