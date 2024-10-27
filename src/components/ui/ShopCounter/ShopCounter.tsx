import React from 'react';
import MinusIcon from '../../icons/MinusIcon/MinusIcon';
import PlusIcon from '../../icons/PlusIcon/PlusIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import styles from './ShopCounter.module.css';

interface ShopCounterProps {
  count: number;
  decreaseQuantity: (e: React.MouseEvent<HTMLButtonElement>) => void;
  increaseQuantity: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShopCounter: React.FC<ShopCounterProps> = ({
  count,
  decreaseQuantity,
  increaseQuantity,
}) => {
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
