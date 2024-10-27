import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './FooterNav.module.css';
import { toSection, scrollToSection } from '../../../utils/scrollToSection';

const FooterNav = () => {
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
  }, [location.pathname, targetSection]);

  return (
    <nav className="nav">
      <ul className={styles['nav-list']}>
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
      </ul>
    </nav>
  );
};

export default FooterNav;
