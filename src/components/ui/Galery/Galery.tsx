import styles from './Galery.module.css';
import { ICard } from '../../../types/types';

const Galery = ({
  card,
  imagePlaceholder,
}: {
  card: ICard;
  imagePlaceholder: string;
}) => {
  const allImages = new Array(6).fill({
    image: imagePlaceholder,
    id: 1,
  });
  return (
    <div className={styles.galery}>
      <div className={styles['main-photo']}>
        <img src={card.image} alt="main photo" />
      </div>
      <ul className={styles.slider}>
        {allImages.map((img) => (
          <li key={img.id}>
            <img src={img.image} alt="secondary photo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Galery;
