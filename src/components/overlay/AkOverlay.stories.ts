import type { Meta, StoryObj } from '@storybook/react';
import AkOverlay from './AkOverlay';

const meta: Meta<typeof AkOverlay> = {
  title: 'Ak/Overlay',
  component: AkOverlay,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overlay: Story = {
  args: {
    isVisible: true
  },
};