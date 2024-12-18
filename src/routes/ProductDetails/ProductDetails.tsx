import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './ProductDetails.module.css';
import ProductInfo from '../../components/ui/ProductInfo/ProductInfo';
import Galery from '../../components/ui/Galery/Galery';
import StateDisplay from '../../components/ui/StateDisplay/StateDisplay';
import { productsApi } from '../../redux/services/ProductsService';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const ProductDetails = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = productsApi.useFetchSingleProductQuery({
    id,
  });

  if (isLoading) return <StateDisplay status="loading" message="Loading..." />;

  if (error && 'status' in error && error.status === 404) {
    return <NotFoundPage />;
  }

  if (error) {
    if ('status' in error && error.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    } else
      return (
        <StateDisplay status="error" message="Uoops! Something went wrong" />
      );
  }

  if (!data) {
    return (
      <StateDisplay
        status="noData"
        message="This product has not information yet"
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
