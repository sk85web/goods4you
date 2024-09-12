import styles from './Faq.module.css';
import FaqAccordion from '../FaqAccordion/FaqAccordion';

const faqs = [
  {
    id: 1,
    question: 'How can I track the status of my order?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    id: 3,
    question: 'How can I return or exchange an item?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
];

const Faq = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>FAQ</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
