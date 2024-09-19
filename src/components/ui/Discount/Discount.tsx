import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';

import { IProduct } from '../../../types/types';
import Button from '../Button/Button';
import styles from './Discount.module.css';
import { discountCounter } from '../../../utils/discountCounter';
import ShopCounter from '../ShopCounter/ShopCounter';
import { hardCodedId } from '../../../constants';
import { fetchCartsByUserId } from '../../../redux/services/fetchCartsByUserId';

type DiscountProps = Pick<IProduct, 'price' | 'discountPercentage' | 'id'>;

const Discount: React.FC<DiscountProps> = ({
  price,
  discountPercentage,
  id,
}) => {
  const [count, setCount] = useState(0);
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

  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev - 1);
  };

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const addToCart = () => {
    setCount((prev) => prev - 1);
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
      {count === 0 ? (
        <Button
          ariaLabel="Add to cart"
          onClick={addToCart}
          children="Add to cart"
        />
      ) : (
        <ShopCounter
          count={count}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      )}
    </div>
  );
};

export default Discount;
