import { useState } from 'react';

import ShopCounter from '../ShopCounter/ShopCounter';
import styles from './CartItem.module.css';
import { CartFormProps } from '../../../types/types';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import CartIcon from '../../icons/CartIcon/CartIcon';
import ButtonLink from '../ButtonLink/ButtonLink';
import { Link } from 'react-router-dom';

const CartItem = ({ product }: { product: CartFormProps }) => {
  const [count, setCount] = useState(1);
  const [deletedProduct, setDeletedProduct] = useState(false);

  const removeFromCart = () => {
    setDeletedProduct((prev) => !prev);
  };

  const decreaseQuantity = () => {
    setCount((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setCount((prev) => prev + 1);
    setDeletedProduct(false);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.infoBlock} ${deletedProduct && styles.blur}`}>
        <div className={styles.image}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.content}>
          <Link to={`/product/${product.id}`}>
            <span className={styles.title}>{product.title}</span>
          </Link>
          <span className={styles.price}>${product.price}</span>
        </div>
      </div>
      <div className={styles.btnBlock}>
        {deletedProduct ? (
          <ButtonWithIcon
            icon={<CartIcon />}
            ariaLabel="Add to cart"
            onClick={increaseQuantity}
          />
        ) : (
          <div className={styles.btnBlock}>
            <ShopCounter
              count={count}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
            <div className={styles.deleteBtnParent}>
              <ButtonLink
                ariaLabel="Delete product"
                onClick={removeFromCart}
                children="Delete"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;