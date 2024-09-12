import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import HeaderNav from '../../ui/HeaderNav/HeaderNav';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">Goods4you</Link>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
