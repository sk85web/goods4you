import React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  ariaLabel: string;
  children: string;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  type: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  ariaLabel,
  onClick,
  isDisabled = false,
  className = '',
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
