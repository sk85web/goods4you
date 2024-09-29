import { Meta, StoryObj } from '@storybook/react';
import ButtonLink from './ButtonLink';

const meta: Meta<typeof ButtonLink> = {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Link: Story = {
  args: {
    ariaLabel: 'open product details',
    children: 'An awesome product',
  },
};
