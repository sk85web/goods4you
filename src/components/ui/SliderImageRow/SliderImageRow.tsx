import React from 'react';

import imageSrc from '../../../assets/photo.png';
import styles from './SliderImageRow.module.css';
import data from '../../../api/products.json';

const sliderLength = new Array(6).fill(null);

interface SliderImageRowProps {
  right: number;
}

const SliderImageRow: React.FC<SliderImageRowProps> = ({ right }) => {
  const card = { ...data[0], image: imageSrc };

  return (
    <ul className={styles.ul} style={{ right: `${right}px` }}>
      {sliderLength.map((_, index) => (
        <li key={index}>
          <img src={card.image} alt={card.title} />
        </li>
      ))}
    </ul>
  );
};

export default SliderImageRow;
