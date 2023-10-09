import type { Meta, StoryObj } from '@storybook/react';
import AkMainBar from './AkMainBar';

const meta: Meta<typeof AkMainBar> = {
  title: 'Ak/MainBar',
  component: AkMainBar,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MainBar: Story = {
  args: {
  },
};
