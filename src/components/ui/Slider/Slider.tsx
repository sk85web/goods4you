import styles from './Slider.module.css';

import ButtonLink from '../ButtonLink/ButtonLink';
import SliderImageRow from '../SliderImageRow/SliderImageRow';
import { useState } from 'react';

const Slider = () => {
  const [right, setRight] = useState(0);

  const onMoveRight = () => {
    setRight((prev) => prev + 70);
  };

  const onMoveLeft = () => {
    setRight((prev) => prev - 70);
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
        <SliderImageRow right={right} />
      </div>
      <ButtonLink
        children="Next"
        onClick={onMoveRight}
        isDisabled={right === 350}
        ariaLabel="Move slider right"
      />
    </div>
  );
};

export default Slider;
