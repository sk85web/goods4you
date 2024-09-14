import React from 'react';
import MinusIcon from '../../icons/MinusIcon/MinusIcon';
import PlusIcon from '../../icons/PlusIcon/PlusIcon';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import styles from './ShopCounter.module.css';

interface ShopCounterProps {
  count: number;
  removeProduct: (e: React.MouseEvent<HTMLButtonElement>) => void;
  addProduct: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShopCounter: React.FC<ShopCounterProps> = ({
  count,
  removeProduct,
  addProduct,
}) => {
  return (
    <div className={styles.container}>
      <ButtonWithIcon
        ariaLabel="Remove one product"
        onClick={removeProduct}
        icon={<MinusIcon />}
        isDisabled={count === 0}
      />
      <span className={styles.count}>{count} item</span>
      <ButtonWithIcon
        ariaLabel="Remove one product"
        onClick={addProduct}
        icon={<PlusIcon />}
      />
    </div>
  );
};

export default ShopCounter;
