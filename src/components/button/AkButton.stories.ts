import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import AkButton from './AkButton';

const meta: Meta<typeof AkButton> = {
  title: 'Ak/Button',
  component: AkButton,
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

export const NoIconS: Story = {
  args: {
    title: 'Create'
  },
};

export const NoIconSecond: Story = {
  args: {
    title: 'Create',
    type: 'second',
  },
};

export const NoIconM: Story = {
  args: {
    title: 'Create',
    size: 'm'
  },
};

export const IconS: Story = {
  args: {
    title: 'Create',
    icon: faCirclePlus
  },
};

export const IconM: Story = {
  args: {
    title: 'Create',
    size: 'm',
    icon: faCirclePlus
  },
};

export const IconReverse: Story = {
  args: {
    title: 'Create',
    size: 'm',
    type: 'reverse',
    icon: faCirclePlus
  },
};