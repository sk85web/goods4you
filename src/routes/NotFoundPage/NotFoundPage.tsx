import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="text-center">
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.subtitle}>
          The page you are looking for doesn't exist.
        </p>
        <Link to="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
