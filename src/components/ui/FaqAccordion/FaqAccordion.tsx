import { IFaq } from '../../../types/types';
import FaqItem from '../FaqItem/FaqItem';

interface FaqAccordionProps {
  faqs: IFaq[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  return (
    <section>
      {faqs.map((faq) => (
        <FaqItem key={faq.id} {...faq} />
      ))}
    </section>
  );
};

export default FaqAccordion;
