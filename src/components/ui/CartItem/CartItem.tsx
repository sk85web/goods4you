import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ShopCounter from '../ShopCounter/ShopCounter';
import styles from './CartItem.module.css';
import { ICartProduct } from '../../../types/types';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import CartIcon from '../../icons/CartIcon/CartIcon';
import ButtonLink from '../ButtonLink/ButtonLink';
import { RootState } from '../../../redux/store';
import { addNewProductToCart } from '../../../utils/addNewProductToCart';
import { AppDispatch } from '../../../redux/store';

const CartItem = ({ product }: { product: ICartProduct }) => {
  const initialCount = product.quantity;
  const [count, setCount] = useState(initialCount);
  const [deletedProduct, setDeletedProduct] = useState(false);
  const { cart, error } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const removeFromCart = () => {
    setDeletedProduct((prev) => !prev);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(1);
    setDeletedProduct(false);

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
            onClick={handleAddToCart}
          />
        ) : (
          <div className={styles.btnBlock}>
            <ShopCounter
              count={count}
              setCount={setCount}
              productId={product.id}
              {...product}
            />
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
