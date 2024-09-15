import styles from './Galery.module.css';
import { ICard } from '../../../types/types';
import Slider from '../Slider/Slider';
import secondaryPhoto from '../../../assets/photo.png';

const Galery = ({ card }: { card: ICard }) => {
  const allImages: { image: string; id: string }[] = new Array(6).fill({
    image: card.image,
    id: card.id,
  });
  console.log(card.image);
  return (
    <div className={styles.galery}>
      <div className={styles['main-photo']}>
        <img src={card.image} alt="main photo" />
      </div>
      <ul className={styles.slider}>
        {allImages.map((img) => (
          <li key={img.id}>
            <img src={secondaryPhoto} alt="secondary photo" />
          </li>
        ))}
      </ul>
      <div className={styles.miniSlider}>
        <Slider />
      </div>
    </div>
  );
};

export default Galery;
