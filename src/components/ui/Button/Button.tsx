import React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  ariaLabel: string;
  // ariaExpanded: string;
  // ariaControl: string;
  children: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ariaLabel, onClick }) => {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
