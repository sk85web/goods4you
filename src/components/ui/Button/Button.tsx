import React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  ariaLabel: string;
  children: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
