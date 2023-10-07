import type { Meta, StoryObj } from '@storybook/react';
import AkSelect from './AkSelect';

const meta: Meta<typeof AkSelect> = {
  title: 'Ak/Selector',
  component: AkSelect,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Selector: Story = {
  args: {
    values: {option01: 'Opcion 01', option02: 'Opcion 02', option013: 'Opcion 03'},
    selected: 'option02',
    onChange: () => {},
  },
};
