import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
import FooterNav from '../../ui/FooterNav/FooterNav';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/product">Goods4you</Link>
        </div>
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
