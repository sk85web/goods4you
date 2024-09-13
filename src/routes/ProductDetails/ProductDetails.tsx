import { Helmet } from 'react-helmet';
// import { useParams } from 'react-router-dom';

import styles from './ProductDetails.module.css';
import imagePlaceholder from '../../assets/image.png';
import { ICard } from '../../types/types';
import ProductInfo from '../../components/ui/ProductInfo/ProductInfo';
import Galery from '../../components/ui/Galery/Galery';

const ProductDetails = () => {
  // const { id = '' } = useParams<{ id: string }>();

  const card: ICard = {
    image: imagePlaceholder,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    price: 9.99,
    discount: 14.5,
    id: '1',
    rating: '4',
    category: 'electronics, selfie accessories',
    quantity: 5,
    waranty: 1,
    ship: 1,
  };

  return (
    <>
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
            <Galery card={card} imagePlaceholder={imagePlaceholder} />
            <ProductInfo card={card} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
