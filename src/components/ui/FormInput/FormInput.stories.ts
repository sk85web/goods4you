import { Meta, StoryObj } from '@storybook/react';

import FormInput from './FormInput';
import './FormInput.module.css';
import '../../../index.css';

const meta: Meta<typeof FormInput> = {
  title: 'Atoms/FormInput',
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const Input: Story = {};
