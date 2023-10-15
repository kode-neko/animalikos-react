import type { Meta, StoryObj } from '@storybook/react';
import AkLoading from './AkLoading';

const meta: Meta<typeof AkLoading> = {
  title: 'Ak/Loading',
  component: AkLoading,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
  },
};
