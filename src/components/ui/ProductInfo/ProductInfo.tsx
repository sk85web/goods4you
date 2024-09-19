import styles from './ProductInfo.module.css';
import StarRating from '../StarRating/StarRating';
import Discount from '../Discount/Discount';
import { IProduct } from '../../../types/types';

const ProductInfo = ({ card }: { card: IProduct }) => {
  const meta = card.tags.join(', ');

  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <h1 className={styles.title}>{card.title}</h1>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <StarRating rating={card.rating} />
          </div>
          <div className={styles.category}>{meta}</div>
        </div>
      </div>
      <div className={styles.stock}>
        <span>In Stock - Only {card.stock} left!</span>
      </div>
      <div className={styles.description}>
        <span>{card.description}</span>
      </div>
      <div className={styles.seconaryText}>
        <span>{card.warrantyInformation}</span>
        <span>{card.shippingInformation}</span>
      </div>

      <Discount
        price={card.price}
        discountPercentage={card.discountPercentage}
        id={card.id}
      />
    </div>
  );
};

export default ProductInfo;
