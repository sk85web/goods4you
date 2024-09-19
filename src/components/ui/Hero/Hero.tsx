import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { scrollToSection } from '../../../utils/scrollToSection';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [targetSection, setTargetSection] = useState<string>('catalog');

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Any products from famous brands <br /> with worldwide delivery
          </h1>
          <p className={styles.subtitle}>
            We sell smartphones, laptops, clothes, shoes
            <br /> and many other products at low prices
          </p>
          <Button
            ariaLabel="Go to shopping"
            onClick={() =>
              scrollToSection(
                targetSection,
                location.pathname,
                setTargetSection,
                navigate
              )
            }
          >
            Go to shopping
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
