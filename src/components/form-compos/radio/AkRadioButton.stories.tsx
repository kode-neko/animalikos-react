import type { Meta, StoryObj } from '@storybook/react';
import AkRadioButton from './AkRadioButton';

let checked: boolean = false;

const meta: Meta<typeof AkRadioButton> = {
  title: 'Ak/Radio Button',
  component: AkRadioButton,
  decorators: [
    (Story) => {
      return <Story 
        checked={checked} 
        onChange={() => checked = !checked} 
      />;
    },
  ],
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'radio', options: [true, false] }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButton: Story = {
  args: {
    label: 'Option',
    value: 'test',
  },
};
