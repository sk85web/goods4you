import StarIcon from '../../icons/StarIcon/StarIcon';

import styles from './StarRating.module.css';

interface StarRatingProps {
  rating: string;
}

const totalStars = 5;

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <ul className={styles['stars-container']}>
      {Array.from({ length: totalStars }, (_, index) => {
        const isFilled = index < +rating;
        return (
          <li key={index}>
            <StarIcon filled={isFilled} />
          </li>
        );
      })}
    </ul>
  );
};

export default StarRating;
