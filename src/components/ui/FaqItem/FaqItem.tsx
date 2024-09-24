import { useState } from 'react';

import { IFaq } from '../../../types/types';
import styles from './FaqItem.module.css';
import CloseIcon from '../../icons/AccordionIcon/AccordionIcon';

const FaqItem: React.FC<IFaq> = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={styles.faqItem}>
      <button
        onClick={toggleFaq}
        aria-expanded={isOpen}
        aria-labelledby={`faq-answer-${id}`}
        className={`${styles.faqButton} ${isOpen ? styles.open : ''}`}
      >
        <h3 className={styles.question}>{question}</h3>
        <CloseIcon isClose={isOpen} />
      </button>

      <p
        id={`faq-answer-${id}`}
        className={`${styles.answer} ${
          isOpen ? styles.answerOpen : styles.answerClose
        }`}
      >
        {answer}
      </p>
    </article>
  );
};

export default FaqItem;
