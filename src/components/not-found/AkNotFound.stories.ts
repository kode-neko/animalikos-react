import type { Meta, StoryObj } from '@storybook/react';
import AkNotFound from './AkNotFound';

const meta: Meta<typeof AkNotFound> = {
  title: 'Ak/NotFound',
  component: AkNotFound,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
  },
};
