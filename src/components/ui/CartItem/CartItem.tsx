import { useState } from 'react';
import { Link } from 'react-router-dom';

import ShopCounter from '../ShopCounter/ShopCounter';
import styles from './CartItem.module.css';
import { ICartProduct } from '../../../types/types';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import CartIcon from '../../icons/CartIcon/CartIcon';
import ButtonLink from '../ButtonLink/ButtonLink';

const CartItem = ({ product }: { product: ICartProduct }) => {
  const initialCount = product.quantity;
  const [count, setCount] = useState(initialCount);
  const [deletedProduct, setDeletedProduct] = useState(false);

  const removeFromCart = () => {
    setDeletedProduct((prev) => !prev);
  };

  const increaseQuantity = () => {
    setCount((prev) => prev + 1);
    setDeletedProduct(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.infoBlock} ${deletedProduct && styles.blur}`}>
        <div className={styles.image}>
          <img src={product.thumbnail} alt={product.title} />
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
            <ShopCounter count={count} setCount={setCount} />
            <div className={styles.deleteBtnParent}>
              <ButtonLink
                ariaLabel="Delete product from cart"
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
