import styles from './Galery.module.css';
import { IProduct } from '../../../types/types';
import Slider from '../Slider/Slider';
import { useState } from 'react';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import { MoonLoader } from 'react-spinners';

const Galery = ({ card }: { card: IProduct }) => {
  const [mainPhoto, setMainPhoto] = useState(card.thumbnail);
  const [isLoading, setIsLoading] = useState(true);

  const handleSliderClick = (src: string) => {
    setMainPhoto(src);
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.galery}>
      <div className={styles['main-photo']}>
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <MoonLoader />
          </div>
        )}
        <img src={mainPhoto} alt={card.title} onLoad={handleLoading} />
      </div>
      {card.images.length > 1 && (
        <>
          <ul className={styles.slider}>
            {card.images.map((img, index) => (
              <li key={index}>
                <ButtonWithIcon
                  ariaLabel="show photo"
                  icon={
                    <img
                      src={img}
                      alt={card.title}
                      srcSet={`${img} 1440w`}
                      sizes="(max-width: 550px) 100vw, 550px"
                    />
                  }
                  onClick={() => handleSliderClick(img)}
                  className={styles.btn}
                />
              </li>
            ))}
          </ul>
          <div className={styles.miniSlider}>
            <Slider
              images={card.images}
              title={card.title}
              onImageClick={handleSliderClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Galery;
