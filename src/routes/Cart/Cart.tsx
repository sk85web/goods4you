import { Helmet } from 'react-helmet';

import styles from './Cart.module.css';
import CartForm from '../../components/ui/CartForm/CartForm';
import CartTotal from '../../components/ui/CartTotal/CartTotal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { fetchCartsByUserId } from '../../api/requests/fetchCartsByUserId';

const Cart = () => {
  const hardCodeId = '6';
  const dispatch = useDispatch<AppDispatch>();
  const { cart, loading, error } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCartsByUserId(hardCodeId));
  }, [dispatch]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error)
    return (
      <div className={styles.loading}>
        <p>
          Uoops! Something went wrong <br /> Error {error}
        </p>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>My cart</h1>
        {cart ? (
          <div className={styles.content}>
            <CartForm />
            <CartTotal />
          </div>
        ) : (
          <h2 className={styles.emtyCart}>No items</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
