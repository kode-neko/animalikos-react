import type { Meta, StoryObj } from '@storybook/react';
import AkHeaderPage from './AkHeaderPage';

const meta: Meta<typeof AkHeaderPage> = {
  title: 'Ak/Header Page',
  component: AkHeaderPage,
  tags: ['autodocs'],
  argTypes: {
    back: { control: 'text' },
    title: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderPage: Story = {
  args: {
    back: 'volver',
    title: 'Title'
  }
};
