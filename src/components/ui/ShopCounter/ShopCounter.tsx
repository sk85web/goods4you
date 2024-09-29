import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

import MinusIcon from '../../icons/MinusIcon/MinusIcon';
import PlusIcon from '../../icons/PlusIcon/PlusIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import styles from './ShopCounter.module.css';
import { RootState, AppDispatch } from '../../../redux/store';
import { addExistedProductToCart } from '../../../utils/addExistedProductToCart';
import { removeExistedProductFromCart } from '../../../utils/removeExistedProductFromCart';

interface ShopCounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  productId: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  stock?: number;
}

const ShopCounter: React.FC<ShopCounterProps> = ({
  count,
  setCount,
  productId,
  title,
  price,
  discountPercentage,
  thumbnail,
  stock,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { userCredentials } = useSelector((state: RootState) => state.user);
  const { cart, error } = useSelector((state: RootState) => state.cart);

  const debouncedRemoveProduct = useMemo(
    () =>
      debounce(() => {
        if (userCredentials && cart) {
          removeExistedProductFromCart({
            cart,
            id: productId,
            title,
            price,
            discountPercentage,
            thumbnail,
            error,
            dispatch,
            navigate,
          });
          setCount(count - 1);
        }
      }, 500),
    [
      userCredentials,
      cart,
      productId,
      title,
      price,
      discountPercentage,
      thumbnail,
      error,
      dispatch,
      navigate,
      count,
      setCount,
    ]
  );

  const debouncedAddProduct = useMemo(
    () =>
      debounce(() => {
        if (userCredentials && cart) {
          addExistedProductToCart({
            cart,
            id: productId,
            title,
            price,
            discountPercentage,
            thumbnail,
            error,
            dispatch,
            navigate,
          });
          setCount(count + 1);
        }
      }, 500),
    [
      userCredentials,
      cart,
      productId,
      title,
      price,
      discountPercentage,
      thumbnail,
      error,
      dispatch,
      navigate,
      count,
      setCount,
    ]
  );

  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (count > 0) {
      debouncedRemoveProduct();
    }
  };

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (count < stock!) {
      debouncedAddProduct();
    }
  };

  return (
    <div className={styles.container}>
      <ButtonWithIcon
        ariaLabel="Decrease quantity"
        onClick={decreaseQuantity}
        icon={<MinusIcon />}
        isDisabled={count === 0}
      />
      <span className={styles.count}>
        {count} item{count > 1 && 's'}
      </span>
      <ButtonWithIcon
        ariaLabel="Increase quantity"
        onClick={increaseQuantity}
        icon={<PlusIcon />}
        isDisabled={count === stock}
      />
    </div>
  );
};

export default ShopCounter;
