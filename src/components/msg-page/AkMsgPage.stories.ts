import type { Meta, StoryObj } from '@storybook/react';
import AkMsgPage from './AkMsgPage';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof AkMsgPage> = {
  title: 'Ak/MsgPage',
  component: AkMsgPage,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    icon: faFaceFrown,
    title: 'No encontrado',
    msg: 'In nostrud minim velit mollit et'
  },
};
