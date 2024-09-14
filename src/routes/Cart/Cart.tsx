import { Helmet } from 'react-helmet';

import styles from './Cart.module.css';
import CartForm from '../../components/ui/CartForm/CartForm';
import CartTotal from '../../components/ui/CartTotal/CartTotal';
import products from '../../api/cartProducts.json';

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <div>
        <div className={styles.container}>
          <h1 className={styles.title}>My cart</h1>
          <div className={styles.content}>
            <CartForm products={products} />
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
