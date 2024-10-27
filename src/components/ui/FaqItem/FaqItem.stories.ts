import { Meta, StoryObj } from '@storybook/react';

import FaqItem from './FaqItem';
import '../../../index.css';
import './FaqItem.module.css';

const meta: Meta<typeof FaqItem> = {
  title: 'Molecules/FaqItem',
  component: FaqItem,
};

export default meta;

type Story = StoryObj<typeof FaqItem>;

export const Default: Story = {
  args: {
    id: 1,
    question: 'How can I track the status of my order?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
};

export const Opened: Story = {
  args: {
    id: 2,
    question: 'What payment methods do you accept?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      button.click();
    }
  },
};
