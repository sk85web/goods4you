import { NavLink } from 'react-router-dom';

import styles from './FooterNav.module.css';

const FooterNav = () => {
  return (
    <nav className="nav">
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <NavLink to="#" aria-label="catalog">
            Catalog
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink to="#" aria-label="faq">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
