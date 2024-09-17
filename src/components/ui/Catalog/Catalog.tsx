import styles from './Catalog.module.css';
import SearchInput from '../SearchInput/SearchInput';
import CardsList from '../CardsList/CardsList';
import Button from '../Button/Button';

const Catalog = () => {
  const handleClick = () => {
    console.log('Show more');
  };

  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.container}>
        <h2 className={styles.title}>Catalog</h2>
        <SearchInput />
        <CardsList />
        <Button ariaLabel="show more" onClick={handleClick}>
          Show more
        </Button>
      </div>
    </section>
  );
};

export default Catalog;
