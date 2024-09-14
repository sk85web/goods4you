import { ICard } from '../../../types/types';
import Button from '../Button/Button';
import styles from './Discount.module.css';

type DiscountProps = Pick<ICard, 'price' | 'discount'>;

const Discount: React.FC<DiscountProps> = ({ price, discount }) => {
  const addToCart = () => {
    console.log('add to cart');
  };

  return (
    <div className={styles.container}>
      <div className={styles.prices}>
        <div className={styles['price-info']}>
          <span className={styles['final-price']}>
            {/* remove comment in real data  */}
            {/* ${(+(+price - (+price * +discount) / 100)).toFixed(2)} */}
            $7.17
          </span>
          <span className={styles.price}>${price}</span>
        </div>
      </div>

      <div className={styles['discount-info']}>
        <span className={styles['discount-info-span']}>
          Your discount: <strong>{discount}%</strong>
        </span>
      </div>
      <Button
        ariaLabel="Add to cart"
        onClick={addToCart}
        children="Add to cart"
      />
    </div>
  );
};

export default Discount;
