import type { Meta, StoryObj } from '@storybook/react';
import AkCard from './AkCard';
import { EnumSex } from '../../models';

const meta: Meta<typeof AkCard> = {
  title: 'Ak/Card',
  component: AkCard,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    animal: {
      name: 'test',
      bday: (new Date()).toISOString(),
      sex: EnumSex.Female,
      enter: (new Date()).toISOString(),
      desc: 'Tempor ullamco laboris aute veniam.'
    }
  },
};
