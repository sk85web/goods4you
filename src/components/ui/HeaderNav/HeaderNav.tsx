import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './HeaderNav.module.css';
import CartIcon from '../../icons/CartIcon/CartIcon';
import Burger from '../Burger/Burger';
import { scrollToSection, toSection } from '../../../utils/scrollToSection';

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    if (targetSection && location.pathname === '/') {
      const section = document.getElementById(targetSection);
      if (section) {
        toSection(section);
        setTargetSection(null);
      }
    }
    setMenuOpen(false);
  }, [location.pathname, targetSection]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <Burger onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
      <ul className={`${styles['nav-list']} ${menuOpen ? styles.active : ''}`}>
        <li className={styles['nav-item']}>
          <div
            className={styles.navDiv}
            onClick={() =>
              scrollToSection(
                'catalog',
                location.pathname,
                setTargetSection,
                navigate
              )
            }
            aria-label="catalog"
          >
            Catalog
          </div>
        </li>
        <li className={styles['nav-item']}>
          <div
            className={styles.navDiv}
            onClick={() =>
              scrollToSection(
                'faq',
                location.pathname,
                setTargetSection,
                navigate
              )
            }
            aria-label="faq"
          >
            FAQ
          </div>
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
          <NavLink to="#" aria-label="login">
            Johnson Smith
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
