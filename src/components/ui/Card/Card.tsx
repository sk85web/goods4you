import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IProduct } from '../../../types/types';
import styles from './Card.module.css';
import CartIcon from '../../icons/CartIcon/CartIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import ShopCounter from '../ShopCounter/ShopCounter';
import { AppDispatch, RootState } from '../../../redux/store';
import { fetchCartsByUserId } from '../../../redux/services/fetchCartsByUserId';
import { hardCodedId } from '../../../constants';
import { discountCounter } from '../../../utils/discountCounter';

const Card: React.FC<IProduct> = ({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { carts } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCartsByUserId(hardCodedId));
  }, [dispatch]);

  useEffect(() => {
    if (carts) {
      carts[0].products.map((product) => {
        if (product.id === id) setCount(product.quantity);
      });
    }
  }, [carts, id]);

  const goToPtoduct = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const priceWithDiscount = discountCounter(price, discountPercentage);

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
          <span className={styles['card-price']}>${priceWithDiscount}</span>
        </div>
        {count === 0 ? (
          <ButtonWithIcon
            ariaLabel="Add to cart"
            icon={<CartIcon />}
            onClick={handleAddToCart}
          />
        ) : (
          <ShopCounter count={count} setCount={setCount} />
        )}
      </div>
    </div>
  );
};

export default Card;
