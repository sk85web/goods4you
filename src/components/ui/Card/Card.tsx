import { Link } from 'react-router-dom';

import { ICard } from '../../../types/types';
import styles from './Card.module.css';
import CartIcon from '../../icons/CartIcon/CartIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import { useState } from 'react';
import ShopCounter from '../ShopCounter/ShopCounter';

const Card: React.FC<ICard> = ({ id, description, image, price }) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount((prev) => prev + 1);
  };

  const removeProduct = () => {
    setCount((prev) => prev - 1);
  };

  const addProduct = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`}>
        <div className={styles.image}>
          <img src={image} alt={description} />
        </div>
        <div className={styles.content}>
          <div className={styles['card-info']}>
            <h3 className={styles['card-description']}>{description}</h3>
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
              removeProduct={removeProduct}
              addProduct={addProduct}
            />
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
