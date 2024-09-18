import { Helmet } from 'react-helmet';
// import { HelmetProvider } from 'react-helmet-async';

import styles from './ProductDetails.module.css';
import data from '../../api/products.json';
import ProductInfo from '../../components/ui/ProductInfo/ProductInfo';
import Galery from '../../components/ui/Galery/Galery';
import imageSrc from '../../assets/main.png';

const ProductDetails = () => {
  const card = { ...data[0], image: imageSrc, price: '9.99' };

  return (
    <>
      {/* <HelmetProvider> */}
      <Helmet>
        <title>{card.title} | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <div>
        <div className={styles.container}>
          <div className={styles.content}>
            <Galery card={card} />
            <ProductInfo card={card} />
          </div>
        </div>
      </div>
      {/* </HelmetProvider> */}
    </>
  );
};

export default ProductDetails;
