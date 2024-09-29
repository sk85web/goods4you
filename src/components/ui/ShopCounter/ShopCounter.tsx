import React from 'react';

import MinusIcon from '../../icons/MinusIcon/MinusIcon';
import PlusIcon from '../../icons/PlusIcon/PlusIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import styles from './ShopCounter.module.css';

interface ShopCounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ShopCounter: React.FC<ShopCounterProps> = ({ count, setCount }) => {
  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <ButtonWithIcon
        ariaLabel="Decrease quantity"
        onClick={decreaseQuantity}
        icon={<MinusIcon />}
        isDisabled={count === 0}
      />
      <span className={styles.count}>{count} item</span>
      <ButtonWithIcon
        ariaLabel="Increase quantity"
        onClick={increaseQuantity}
        icon={<PlusIcon />}
      />
    </div>
  );
};

export default ShopCounter;
