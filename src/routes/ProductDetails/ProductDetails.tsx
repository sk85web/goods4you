import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

import styles from './ProductDetails.module.css';
import ProductInfo from '../../components/ui/ProductInfo/ProductInfo';
import Galery from '../../components/ui/Galery/Galery';
import StateDisplay from '../../components/ui/StateDisplay/StateDisplay';
import { productsApi } from '../../redux/services/ProductsService';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id = '' } = useParams();
  const { data, isLoading, error } = productsApi.useFetchSingleProductQuery({
    id,
  });

  if (isLoading) return <StateDisplay status="loading" message="Loading..." />;
  if (error)
    return (
      <StateDisplay status="error" message="Uoops! Something went wrong" />
    );

  if (!data) {
    return (
      <StateDisplay
        status="noData"
        message="This product have not information yet"
      />
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{data && data.title} | Goods4you</title>
          <meta
            name="description"
            content="Any products from famous brands with worldwide delivery"
          />
        </Helmet>
        <div>
          <div className={styles.container}>
            <div className={styles.content}>
              <Galery card={data} />
              <ProductInfo card={data} />
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default ProductDetails;
