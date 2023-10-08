import type { Meta, StoryObj } from '@storybook/react';
import AkField from './AkField';
import { AkInput } from '../input';

const meta: Meta<typeof AkField> = {
  title: 'Ak/Field',
  component: AkField,
  decorators: [
    (Story) => {
      return (
        <Story>
          <AkInput
            value=''
            onChange={() => {}}
          />
        </Story>
      );
    },
  ],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    hint: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Field: Story = {
  args: {
    title: 'Field',
    hint: 'Hint message',
  },
};
