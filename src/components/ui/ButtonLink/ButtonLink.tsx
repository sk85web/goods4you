import React from 'react';

import styles from './ButtonLink.module.css';

interface ButtonProps {
  ariaLabel: string;
  children: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const ButtonLink: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
