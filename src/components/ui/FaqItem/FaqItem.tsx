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
    <div className={styles.faqItem}>
      <button
        onClick={toggleFaq}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className={`${styles.faqButton} ${isOpen ? styles.open : ''}`}
      >
        <span className={styles.question}>{question}</span>
        <CloseIcon isClose={isOpen} />
      </button>
      <div
        id={`faq-answer-${id}`}
        className={`${styles.answer} ${
          isOpen ? styles.answerOpen : styles.answerClose
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
