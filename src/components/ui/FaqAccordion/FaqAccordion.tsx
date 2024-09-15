import FaqItem from '../FaqItem/FaqItem';
import styles from './FaqAccordion.module.css';

export interface IFaq {
  question: string;
  answer: string;
  id: number;
}

interface FaqAccordionProps {
  faqs: IFaq[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  if (faqs.length === 0) {
    return <p className={styles.empty}>No answers yet</p>;
  }
  return (
    <div className={styles.container}>
      {faqs.map((faq) => (
        <FaqItem key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default FaqAccordion;
