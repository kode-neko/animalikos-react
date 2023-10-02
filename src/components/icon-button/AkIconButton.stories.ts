import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import AkIconButton from './AkIconButton';

const meta: Meta<typeof AkIconButton> = {
  title: 'Ak/IconButton',
  component: AkIconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {}
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIconS: Story = {
  args: {
    icon: faCirclePlus
  },
};
