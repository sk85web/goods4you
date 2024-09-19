import { IProduct } from '../../../types/types';
import Button from '../Button/Button';
import styles from './Discount.module.css';
import { discountCounter } from '../../../utils/discountCounter';

type DiscountProps = Pick<IProduct, 'price' | 'discountPercentage'>;

const Discount: React.FC<DiscountProps> = ({ price, discountPercentage }) => {
  const addToCart = () => {
    console.log('add to cart');
  };

  const priceWithDiscount = discountCounter(price, discountPercentage);

  return (
    <div className={styles.container}>
      <div className={styles.prices}>
        <div className={styles['price-info']}>
          <span className={styles['final-price']}>${priceWithDiscount}</span>
          <span className={styles.price}>${price}</span>
        </div>
      </div>

      <div className={styles['discount-info']}>
        <span className={styles['discount-info-span']}>
          Your discount: <strong>{discountPercentage}%</strong>
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
