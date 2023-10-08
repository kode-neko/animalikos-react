import type { Meta, StoryObj } from '@storybook/react';
import AkTextArea from './AkTextArea';

const meta: Meta<typeof AkTextArea> = {
  title: 'Ak/TextArea',
  component: AkTextArea,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  args: {
    value: '',
    placeholder: 'un mensaje'
  },
};