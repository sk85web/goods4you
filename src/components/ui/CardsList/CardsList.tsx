import { ICard } from '../../../types/types';
import Card from '../Card/Card';
import styles from './CardsList.module.css';

interface CardsListProps {
  cards: ICard[];
}

const CardsList: React.FC<CardsListProps> = ({ cards }) => {
  if (cards.length === 0) {
    return <p className={styles.empty}>No Goods found.</p>;
  }
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardsList;
