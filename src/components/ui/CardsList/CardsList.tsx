import { useEffect, useState } from 'react';

import Card from '../Card/Card';
import styles from './CardsList.module.css';
import { productsApi } from '../../../redux/services/ProductsService';
import React from 'react';
import { IProduct } from '../../../types/types';

interface CardsListProps {
  limit: number;
  skip: number;
}

const CardsList: React.FC<CardsListProps> = ({ limit, skip }) => {
  const [loadedCards, setLoadedCards] = useState<IProduct[]>([]);

  const { data, isLoading, error } = productsApi.useFetchAllProductsQuery({
    limit,
    skip,
  });

  useEffect(() => {
    if (data) {
      setLoadedCards((prev) => [...prev, ...data.products]);
    }
  }, [data]);

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
      {loadedCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardsList;
