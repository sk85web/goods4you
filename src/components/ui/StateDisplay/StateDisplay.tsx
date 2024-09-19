import styles from './StateDisplay.module.css';

interface StateDisplayProps {
  status: string;
  message: string;
}

const StateDisplay: React.FC<StateDisplayProps> = ({ status, message }) => {
  return (
    <div className={styles[`${status}`]}>
      <h3>{message}</h3>
    </div>
  );
};

export default StateDisplay;
