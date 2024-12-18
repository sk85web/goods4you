import { useState, useEffect } from 'react';
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
import StateDisplay from '../StateDisplay/StateDisplay';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const limit = 12;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loadedProducts, skip } = useSelector(
    (state: RootState) => state.catalog
  );
  const [searchParam, setSearchParam] = useState('');

  const { data, isLoading, error } = productsApi.useFetchAllProductsQuery({
    limit,
    skip,
    searchQuery: searchParam,
  });

  useEffect(() => {
    return () => {
      dispatch(resetCatalog());
    };
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setLoadedProducts(data.products));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (searchParam) {
      dispatch(resetCatalog());
    }
    return () => {
      dispatch(resetCatalog());
    };
  }, [searchParam, dispatch]);

  const handleClick = () => {
    dispatch(setSkip(skip + limit));
  };

  if (isLoading) return <StateDisplay status="loading" message="Loading..." />;

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
    return <StateDisplay status="noData" message="There are no any products" />;
  }

  const totalProducts = data.total;

  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.container}>
        <h2 className={styles.title}>Catalog</h2>
        <SearchInput onSearch={setSearchParam} />
        {searchParam && data.products.length === 0 ? (
          <div className={styles.loading}>
            <h3>No search results</h3>
          </div>
        ) : (
          <CardsList loadedCards={loadedProducts} />
        )}

        <Button
          type="button"
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
