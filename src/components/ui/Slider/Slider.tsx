import styles from './Slider.module.css';

import ButtonLink from '../ButtonLink/ButtonLink';
import SliderImageRow from '../SliderImageRow/SliderImageRow';
import { useState } from 'react';

interface SliderProps {
  images: string[];
  title: string;
  onImageClick: (img: string) => void;
}

const Slider: React.FC<SliderProps> = ({ images, title, onImageClick }) => {
  const [right, setRight] = useState(0);

  const length = images.length * 200 - 200;

  const onMoveRight = () => {
    setRight((prev) => prev + 200);
  };

  const onMoveLeft = () => {
    setRight((prev) => prev - 200);
  };

  return (
    <div className={styles.container}>
      <ButtonLink
        children="Prev"
        onClick={onMoveLeft}
        isDisabled={right === 0}
        ariaLabel="Move slider left"
      />
      <div className={styles.sliderWrapper}>
        <SliderImageRow
          right={right}
          images={images}
          title={title}
          onImageClick={onImageClick}
        />
      </div>
      <ButtonLink
        children="Next"
        onClick={onMoveRight}
        isDisabled={right === length}
        ariaLabel="Move slider right"
      />
    </div>
  );
};

export default Slider;
