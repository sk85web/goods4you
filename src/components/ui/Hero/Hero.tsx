import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const handleClick = () => {
    console.log('go to shopping');
  };

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
          <Button ariaLabel="go to shopping" onClick={handleClick}>
            Go to shopping
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
