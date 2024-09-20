import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import '../../../index.css';
import './Button.module.css';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    ariaLabel: 'just a button',
    children: 'Add to cart',
  },
};
