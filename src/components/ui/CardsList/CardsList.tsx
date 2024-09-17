import Card from '../Card/Card';
import styles from './CardsList.module.css';
import { productsApi } from '../../../redux/services/ProductsService';

const CardsList = () => {
  const { data, isLoading, error } = productsApi.useFetchAllProductsQuery(12);

  const cards = data ? data.products : [];

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
    <div className={styles.container}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardsList;
