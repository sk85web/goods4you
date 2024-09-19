import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found | Goods4you</title>
        <meta
          name="not found"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
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
    </>
  );
};

export default NotFoundPage;
