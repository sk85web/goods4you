import { useState } from 'react';

import ShopCounter from '../ShopCounter/ShopCounter';
import styles from './CartItem.module.css';
import { CartFormProps } from '../../../types/types';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import CartIcon from '../../icons/CartIcon/CartIcon';

const CartItem = ({ card }: { card: CartFormProps }) => {
  const [count, setCount] = useState(0);
  const [deletedProduct, setDeletedProduct] = useState(false);

  const remove = () => {
    setDeletedProduct((prev) => !prev);
  };

  const removeProduct = () => {
    setCount((prev) => prev - 1);
  };

  const addProduct = () => {
    setCount((prev) => prev + 1);
    setDeletedProduct(false);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.infoBlock} ${deletedProduct && styles.blur}`}>
        <div className={styles.image}>
          <img src={card.image} alt={card.title} />
        </div>
        <div className={styles.content}>
          <span className={styles.title}>{card.title}</span>
          <span className={styles.price}>${card.price}</span>
        </div>
      </div>
      <div className={styles.btnBlock}>
        {deletedProduct ? (
          <ButtonWithIcon
            icon={<CartIcon />}
            ariaLabel="Add to cart"
            onClick={addProduct}
          />
        ) : (
          <div className={styles.btnBlock}>
            <ShopCounter
              count={count}
              removeProduct={removeProduct}
              addProduct={addProduct}
            />
            <div className={styles.deleteBtnParent}>
              <button
                type="button"
                aria-label="Delete product"
                onClick={remove}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
