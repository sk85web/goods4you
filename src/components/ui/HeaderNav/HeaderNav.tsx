import { NavLink } from 'react-router-dom';

import styles from './HeaderNav.module.css';
import CartIcon from '../../icons/CartIcon/CartIcon';

const HeaderNav = () => {
  return (
    <nav className="nav">
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <NavLink to="/" aria-label="catalog">
            Catalog
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink to="/" aria-label="faq">
            FAQ
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink to="/cart" aria-label="cart">
            <div className={styles['nav-item-group']}>
              <span>Cart</span>
              <CartIcon />
            </div>
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink to="/login" aria-label="login">
            Johnson Smith
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
