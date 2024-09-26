import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';

import { IProduct } from '../../../types/types';
import Button from '../Button/Button';
import styles from './Discount.module.css';
import { discountCounter } from '../../../utils/discountCounter';
import ShopCounter from '../ShopCounter/ShopCounter';
import { fetchCartsByUserId } from '../../../redux/services/fetchCartsByUserId';
import { addNewProductToCart } from '../../../utils/addNewProductToCart';
import { useNavigate } from 'react-router-dom';

// type DiscountProps = Pick<IProduct, 'price' | 'discountPercentage' | 'id'>;

const Discount = (
  // price,
  // discountPercentage,
  // id,
  product: IProduct
) => {
  const [count, setCount] = useState(0);
  const { cart, error } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { userCredentials } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userCredentials) {
      dispatch(fetchCartsByUserId(userCredentials.id));
    }
  }, [dispatch, userCredentials]);

  useEffect(() => {
    if (cart) {
      cart.products.map((cartProduct) => {
        if (product.id === cartProduct.id) setCount(cartProduct.quantity);
      });
    }
  }, [cart, product.id]);

  const handleAddToCart = () => {
    setCount((prev) => prev + 1);

    if (cart) {
      addNewProductToCart({
        cart,
        id: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        thumbnail: product.thumbnail,
        error,
        dispatch,
        navigate,
      });
    }
  };

  const priceWithDiscount = discountCounter(
    product.price,
    product.discountPercentage
  );

  return (
    <div className={styles.container}>
      <div className={styles.prices}>
        <div className={styles['price-info']}>
          <span className={styles['final-price']}>${priceWithDiscount}</span>
          <span className={styles.price}>${product.price}</span>
        </div>
      </div>

      <div className={styles['discount-info']}>
        <span className={styles['discount-info-span']}>
          Your discount: <strong>{product.discountPercentage}%</strong>
        </span>
      </div>
      {count === 0 ? (
        <Button
          type="button"
          ariaLabel="Add to cart"
          onClick={handleAddToCart}
          children="Add to cart"
        />
      ) : (
        <ShopCounter
          count={count}
          setCount={setCount}
          productId={product.id}
          {...product}
        />
      )}
    </div>
  );
};

export default Discount;
