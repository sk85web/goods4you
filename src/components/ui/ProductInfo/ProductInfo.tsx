import styles from './ProductInfo.module.css';
import StarRating from '../StarRating/StarRating';
import Discount from '../Discount/Discount';
import { ICard } from '../../../types/types';

const ProductInfo = ({ card }: { card: ICard }) => {
  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <h1 className={styles.title}>{card.title}</h1>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <StarRating rating={card.rating ?? '1'} />
          </div>
          <div className={styles.category}>{card.category}</div>
        </div>
      </div>
      <div className={styles.stock}>
        <span>In Stock - Only {card.quantity} left!</span>
      </div>
      <div className={styles.description}>
        <span>{card.description}</span>
      </div>
      <div className={styles.seconaryText}>
        <span>{card.waranty} month warranty</span>
        <span>Ships in {card.ship} month</span>
      </div>

      <Discount price={card.price} discount={card.discount} />
    </div>
  );
};

export default ProductInfo;
