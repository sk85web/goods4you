import Button from '../Button/Button';
import styles from './Discount.module.css';

interface DiscountProps {
  price: number;
  discount: number;
}

const Discount: React.FC<DiscountProps> = ({ price, discount }) => {
  const addToCart = () => {
    console.log('add to cart');
  };

  return (
    <div className={styles.container}>
      <div className={styles.prices}>
        <div className={styles['price-info']}>
          <span className={styles['final-price']}>
            ${(+(price - (price * discount) / 100)).toFixed(2)}
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
