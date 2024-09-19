import styles from './Galery.module.css';
import { IProduct } from '../../../types/types';
import Slider from '../Slider/Slider';
import { useState } from 'react';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

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
                <ButtonWithIcon
                  ariaLabel="show photo"
                  icon={<img src={img} alt="secondary photo" />}
                  onClick={() => handleSliderClick(img)}
                  className={styles.btn}
                />
              </li>
            ))}
          </ul>
          <div className={styles.miniSlider}>
            <Slider images={card.images} title={card.title} />
          </div>
        </>
      )}
    </div>
  );
};

export default Galery;
