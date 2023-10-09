import type { Meta, StoryObj } from '@storybook/react';
import AkMainBarMobile from './AkMainBarMobile';

const meta: Meta<typeof AkMainBarMobile> = {
  title: 'Ak/MainBarMobilr',
  component: AkMainBarMobile,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MainBarMobile: Story = {
  args: {
  },
};
