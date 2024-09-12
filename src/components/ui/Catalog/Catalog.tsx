import styles from './Catalog.module.css';
import SearchInput from '../SearchInput/SearchInput';
import CardsList from '../CardsList/CardsList';
import imagePlaceholder from '../../../assets/image.png';
import Button from '../Button/Button';
import { forwardRef } from 'react';

const Catalog = forwardRef<HTMLElement>((_, ref) => {
  const cards = new Array(12).fill({
    image: imagePlaceholder,
    description: 'Essence Mascara Lash Princess',
    price: 110,
    id: 1, // потом заменить на разные id
  });

  const handleClick = () => {
    console.log('Show more');
  };

  return (
    <section className={styles.catalog} id="catalog" ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Catalog</h2>
        <SearchInput />
        <CardsList cards={cards} />
        <Button ariaLabel="show more" onClick={handleClick}>
          Show more
        </Button>
      </div>
    </section>
  );
});

export default Catalog;
