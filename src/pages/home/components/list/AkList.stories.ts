import type { Meta, StoryObj } from '@storybook/react';
import AkList from './AkList';

const meta: Meta<typeof AkList> = {
  title: 'Ak/List',
  component: AkList,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    size: { control: 'radio', options: ['s', 'm'] },
    type: { control: 'radio', options: ['main', 'second', 'reverse'] },
    icon: {}
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    title: 'Create'
  },
};