import { Meta, StoryObj } from '@storybook/react';

import ShopCounter from './ShopCounter';
import './ShopCounter.module.css';
import '../../../index.css';

const meta: Meta<typeof ShopCounter> = {
  title: 'Molecules/ShopCounter',
  component: ShopCounter,
};

export default meta;

type Story = StoryObj<typeof ShopCounter>;

export const Counter: Story = {
  args: {
    count: 1,
  },
};
