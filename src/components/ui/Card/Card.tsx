import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../../types/types';
import styles from './Card.module.css';
import CartIcon from '../../icons/CartIcon/CartIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import { useState } from 'react';
import ShopCounter from '../ShopCounter/ShopCounter';

const Card: React.FC<IProduct> = ({ id, title, thumbnail, price }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const goToPtoduct = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev - 1);
  };

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.card} onClick={goToPtoduct}>
      <div className={styles.image}>
        <img
          src={thumbnail}
          alt={title}
          srcSet={`${thumbnail} 1440w`}
          sizes="(max-width: 1440px) 100vw, 1440px"
        />
      </div>
      <div className={styles.content}>
        <div className={styles['card-info']}>
          <h3 className={styles['card-title']}>{title}</h3>
          <span className={styles['card-price']}>${price}</span>
        </div>
        {count === 0 ? (
          <ButtonWithIcon
            ariaLabel="Add to cart"
            icon={<CartIcon />}
            onClick={handleAddToCart}
          />
        ) : (
          <ShopCounter
            count={count}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
