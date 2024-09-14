import React from 'react';

import styles from './ButtonLink.module.css';

interface ButtonProps {
  ariaLabel: string;
  children: string;
  onClick: () => void;
}

const ButtonLink: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  onClick,
}) => {
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

export default ButtonLink;
