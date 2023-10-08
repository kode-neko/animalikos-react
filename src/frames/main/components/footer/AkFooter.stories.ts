import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import AkFooter from './AkFooter';

const meta: Meta<typeof AkFooter> = {
  title: 'Ak/Footer',
  component: AkFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIconS: Story = {
  args: {
  },
};
