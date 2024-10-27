import Card from '../Card/Card';
import styles from './CardsList.module.css';
import React from 'react';
import { IProduct } from '../../../types/types';

interface CardsListProps {
  loadedCards: IProduct[];
}

const CardsList: React.FC<CardsListProps> = ({ loadedCards }) => {
  return (
    <div className={styles.container}>
      {loadedCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardsList;
