import styles from './Galery.module.css';
import { IProduct } from '../../../types/types';
import Slider from '../Slider/Slider';

const Galery = ({ card }: { card: IProduct }) => {
  return (
    <div className={styles.galery}>
      <div className={styles['main-photo']}>
        <img src={card.thumbnail} alt="main photo" />
      </div>
      <ul className={styles.slider}>
        {card.images.map((img, index) => (
          <li key={index}>
            <img src={img} alt="secondary photo" />
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
