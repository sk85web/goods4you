import { useState } from 'react';

import styles from './Catalog.module.css';
import SearchInput from '../SearchInput/SearchInput';
import CardsList from '../CardsList/CardsList';
import Button from '../Button/Button';
import { productsApi } from '../../../redux/services/ProductsService';

const Catalog = () => {
  const limit = 12;
  const [skip, setSkip] = useState(0);
  const [loadedProducts, setLoadedProducts] = useState(limit);

  const { data } = productsApi.useFetchAllProductsQuery({
    limit,
    skip,
  });

  const totalProducts = data ? data.total : 0;

  const handleClick = () => {
    setSkip((prev) => prev + 12);
    setLoadedProducts((prev) => prev + limit);
  };

  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.container}>
        <h2 className={styles.title}>Catalog</h2>
        <SearchInput />
        <CardsList limit={limit} skip={skip} />
        <Button
          ariaLabel="show more"
          onClick={handleClick}
          isDisabled={loadedProducts >= totalProducts}
        >
          Show more
        </Button>
      </div>
    </section>
  );
};

export default Catalog;
