import React from 'react';

import styles from './ButtonWithIcon.module.css';

interface ButtonWithIconProps {
  ariaLabel: string;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  ariaLabel,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      className={styles.btn}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
};

export default ButtonWithIcon;
