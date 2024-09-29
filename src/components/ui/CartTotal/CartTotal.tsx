import { useSelector } from 'react-redux';

import styles from './CartTotal.module.css';
import { RootState } from '../../../redux/store';

const CartTotal = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const products = cart ? cart.products : [];

  const fullPrice = +products
    .reduce((acc, { price, quantity }) => price * quantity + acc, 0)
    .toFixed(2);

  const discountPrice = +products
    .reduce(
      (acc, { price, quantity, discountPercentage }) =>
        acc + price * (1 - discountPercentage / 100) * quantity,
      0
    )
    .toFixed(2);

  const totalProductsQnt = products.filter(
    (product) => product.quantity !== 0
  ).length;

  return (
    <div className={styles.common}>
      <div className={styles.countBlock}>
        <div className={styles.row}>
          <span className={styles.countTitle}>Total count</span>
          <span className={styles.countValue}>{totalProductsQnt} items</span>
        </div>
        <div className={styles.row}>
          <span className={styles.priceTitle}>Price without discount</span>
          <span className={styles.priceValue}>${fullPrice}</span>
        </div>
      </div>
      <div className={styles.resultBlock}>
        <div className={styles.row}>
          <span className={styles.resultTitle}>Total price</span>
          <span className={styles.resultValue}>${discountPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
