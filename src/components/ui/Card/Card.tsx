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
import { discountCounter } from '../../../utils/discountCounter';
import { MoonLoader } from 'react-spinners';
import { addNewProductToCart } from '../../../utils/addNewProductToCart';

const Card: React.FC<IProduct> = ({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
  stock,
}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { cart, error } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  const { userCredentials } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userCredentials && !cart) {
      dispatch(fetchCartsByUserId(userCredentials.id));
    }
  }, [dispatch, userCredentials, cart]);

  useEffect(() => {
    if (cart) {
      cart.products.forEach((product) => {
        if (product.id === id) setCount(product.quantity);
      });
    }
  }, [cart, id]);

  const goToPtoduct = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(1);
    if (cart) {
      addNewProductToCart({
        cart,
        id,
        title,
        price,
        discountPercentage,
        thumbnail,
        error,
        dispatch,
        navigate,
      });
    }
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  const priceWithDiscount = discountCounter(price, discountPercentage);

  return (
    <div className={styles.card} onClick={goToPtoduct}>
      <div className={styles.image}>
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <MoonLoader />
          </div>
        )}
        <img
          src={thumbnail}
          alt={title}
          srcSet={`${thumbnail} 1440w`}
          sizes="(max-width: 1440px) 100vw, 1440px"
          onLoad={handleLoading}
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
          <ShopCounter
            count={count}
            setCount={setCount}
            productId={id}
            title={title}
            price={price}
            discountPercentage={discountPercentage}
            thumbnail={thumbnail}
            stock={stock}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
