import styles from './CartTotal.module.css';

const CartTotal = () => {
  return (
    <div className={styles.common}>
      <div className={styles.countBlock}>
        <div className={styles.row}>
          <span className={styles.countTitle}>Total count</span>
          <span className={styles.countValue}>3 items</span>
        </div>
        <div className={styles.row}>
          <span className={styles.priceTitle}>Price without discount</span>
          <span className={styles.priceValue}>$700</span>
        </div>
      </div>
      <div className={styles.resultBlock}>
        <div className={styles.row}>
          <span className={styles.resultTitle}>Total price</span>
          <span className={styles.resultValue}>$590</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
