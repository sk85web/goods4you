import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Catalog.module.css';
import SearchInput from '../SearchInput/SearchInput';
import CardsList from '../CardsList/CardsList';
import Button from '../Button/Button';
import { productsApi } from '../../../redux/services/ProductsService';
import { AppDispatch, RootState } from '../../../redux/store';
import {
  resetCatalog,
  setLoadedProducts,
  setSkip,
} from '../../../redux/slices/catalogSlice';

const Catalog = () => {
  const limit = 12;
  const dispatch = useDispatch<AppDispatch>();
  const { loadedProducts, skip } = useSelector(
    (state: RootState) => state.catalog
  );

  const { data, isLoading, error } = productsApi.useFetchAllProductsQuery({
    limit,
    skip,
  });

  useEffect(() => {
    dispatch(resetCatalog());
  }, [dispatch]);

  useEffect(() => {
    if (data && loadedProducts.length === 0) {
      dispatch(setLoadedProducts(data.products));
      dispatch(setSkip(limit + skip));
    }
  }, [dispatch, loadedProducts, data, skip]);

  const totalProducts = data ? data.total : 0;

  const handleClick = () => {
    if (data) {
      dispatch(setLoadedProducts(data.products));
      dispatch(setSkip(skip + limit));
    }
  };

  if (isLoading)
    return (
      <div className={styles.loading}>
        <h3>Loading...</h3>
      </div>
    );

  if (error)
    return (
      <div className={styles.error}>
        <h3>Uoops! Something went wrong</h3>
      </div>
    );

  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.container}>
        <h2 className={styles.title}>Catalog</h2>
        <SearchInput />
        <CardsList loadedCards={loadedProducts} />
        <Button
          ariaLabel="show more"
          onClick={handleClick}
          isDisabled={loadedProducts.length >= totalProducts}
        >
          Show more
        </Button>
      </div>
    </section>
  );
};

export default Catalog;
