import type { Meta, StoryObj } from '@storybook/react';
import AkSearch from './AkSearch';

const meta: Meta<typeof AkSearch> = {
  title: 'Ak/Search',
  component: AkSearch,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    searchStr: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIconS: Story = {
  args: {
    placeholder: '',
    searchStr: '',
    onSearch: () => {},
    onAll: () => {},
  },
};
