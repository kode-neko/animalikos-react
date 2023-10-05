import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import AkSwitch from './AkSwitch';

const meta: Meta<typeof AkSwitch> = {
  title: 'Ak/AkSwitch',
  component: AkSwitch,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['round', 'square'] },
    /*
    title: { control: 'text' },
    size: { control: 'radio', options: ['s', 'm'] },
    icon: {}
    */
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SqrSw: Story = {
  args: {
    type: 'square',
    icon: faGlobe,
    labels: ['es', 'en'],
    isRight: true,
    onClick: () => {},
  },
};