import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './FooterNav.module.css';

const toSection = (section: HTMLElement) => {
  return section?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const FooterNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      toSection(section);
    } else {
      setTargetSection(id);
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  };

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
          <div onClick={() => scrollToSection('catalog')} aria-label="catalog">
            Catalog
          </div>
        </li>
        <li className={styles['nav-item']}>
          <div onClick={() => scrollToSection('faq')} aria-label="faq">
            FAQ
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
