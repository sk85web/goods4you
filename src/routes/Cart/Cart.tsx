import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './Cart.module.css';
import CartForm from '../../components/ui/CartForm/CartForm';
import CartTotal from '../../components/ui/CartTotal/CartTotal';
import StateDisplay from '../../components/ui/StateDisplay/StateDisplay';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCartsByUserId } from '../../redux/services/fetchCartsByUserId';
import { hardCodedId } from '../../constants';

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { carts, loading, error } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCartsByUserId(hardCodedId));
  }, [dispatch]);

  if (loading) return <StateDisplay status="loading" message="Loading..." />;
  if (error)
    return (
      <StateDisplay status="error" message="Uoops! Something went wrong" />
    );

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>My cart | Goods4you</title>
          <meta
            name="description"
            content="Any products from famous   brands with worldwide delivery"
          />
        </Helmet>
        <div className={styles.container}>
          <h1 className={styles.title}>My cart</h1>
          {carts && carts[0] ? (
            <div className={styles.content}>
              <CartForm />
              <CartTotal />
            </div>
          ) : (
            <h2 className={styles.emtyCart}>No items</h2>
          )}
        </div>
      </>
    </HelmetProvider>
  );
};

export default Cart;
