import { MoonLoader } from 'react-spinners';

import styles from './StateDisplay.module.css';

interface StateDisplayProps {
  status: 'loading' | 'error' | 'noData';
  message: string;
}

const StateDisplay: React.FC<StateDisplayProps> = ({ status, message }) => {
  return (
    <div className={styles[`${status}`]}>
      <h3>{message}</h3>
      {status === 'loading' && <MoonLoader />}
    </div>
  );
};

export default StateDisplay;
