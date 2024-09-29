import styles from './Burger.module.css';

const Burger = ({
  isOpen = false,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      aria-label="menu"
      className={`${styles.burger} ${isOpen ? styles.active : ''}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
