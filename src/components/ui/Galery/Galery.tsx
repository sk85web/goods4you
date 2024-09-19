import styles from './Galery.module.css';
import { IProduct } from '../../../types/types';
import Slider from '../Slider/Slider';
import { useState } from 'react';

const Galery = ({ card }: { card: IProduct }) => {
  const [mainPhoto, setMainPhoto] = useState(card.thumbnail);

  const handleSliderClick = (src: string) => {
    setMainPhoto(src);
  };
  return (
    <div className={styles.galery}>
      <div className={styles['main-photo']}>
        <img src={mainPhoto} alt="main photo" />
      </div>
      {card.images.length > 1 && (
        <>
          <ul className={styles.slider}>
            {card.images.map((img, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSliderClick(img)}
                  className={styles.btn}
                >
                  <img src={img} alt="secondary photo" />
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.miniSlider}>
            <Slider />
          </div>
        </>
      )}
    </div>
  );
};

export default Galery;
