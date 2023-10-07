import type { Meta, StoryObj } from '@storybook/react';
import AkInput from './AkInput';

const meta: Meta<typeof AkInput> = {
  title: 'Ak/Input',
  component: AkInput,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'radio', options: ['s', 'm'] }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputM: Story = {
  args: {
    value: 'Perico'
  },
};

export const InputMPh: Story = {
  args: {
    placeholder: 'nombre...'
  },
};

export const InputS: Story = {
  args: {
    value: 'Paquita',
    size: 's'
  },
};
