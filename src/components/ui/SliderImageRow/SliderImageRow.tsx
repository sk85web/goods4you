import React from 'react';

import styles from './SliderImageRow.module.css';

interface SliderImageRowProps {
  right: number;
  images: string[];
  title: string;
  onImageClick: (img: string) => void;
}

const SliderImageRow: React.FC<SliderImageRowProps> = ({
  right,
  images,
  title,
  onImageClick,
}) => {
  return (
    <ul className={styles.ul} style={{ right: `${right}px` }}>
      {images.map((img, index) => (
        <li key={index}>
          <img
            src={img}
            alt={title}
            srcSet={`${img} 1440w`}
            sizes="(max-width: 550px) 100vw, 550px"
            onClick={() => onImageClick(img)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SliderImageRow;
