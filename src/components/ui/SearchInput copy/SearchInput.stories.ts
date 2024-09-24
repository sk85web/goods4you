import { Meta, StoryObj } from '@storybook/react';

import SearchInput from './SearchInput';
import './SearchInput.module.css';
import '../../../index.css';

const meta: Meta<typeof SearchInput> = {
  title: 'Atoms/SearchInput',
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Input: Story = {};
