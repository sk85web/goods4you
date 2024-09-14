import { Helmet } from 'react-helmet';

import styles from './Cart.module.css';
import imagePlaceholder from '../../assets/image.png';
import { ICard } from '../../types/types';
import CartForm from '../../components/ui/CartForm/CartForm';
import CartTotal from '../../components/ui/CartTotal/CartTotal';

const cards: ICard[] = new Array(4).fill({
  image: imagePlaceholder,
  title: 'Essence Mascara Lash Princess',
  price: 110,
  id: '1', // потом заменить на разные id
});

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
            <CartForm cards={cards} />
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
