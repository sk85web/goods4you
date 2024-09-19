import React from 'react';

import styles from './SliderImageRow.module.css';

interface SliderImageRowProps {
  right: number;
  images: string[];
  title: string;
}

const SliderImageRow: React.FC<SliderImageRowProps> = ({
  right,
  images,
  title,
}) => {
  return (
    <ul className={styles.ul} style={{ right: `${right}px` }}>
      {images.map((img, index) => (
        <li key={index}>
          <img src={img} alt={title} />
        </li>
      ))}
    </ul>
  );
};

export default SliderImageRow;
