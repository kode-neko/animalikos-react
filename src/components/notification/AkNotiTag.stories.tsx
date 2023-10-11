import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import {AkNotiTag} from './AkNotiStack';
import { AkNoti } from './types';

const meta: Meta<typeof AkNotiTag> = {
  title: 'Ak/NotiTag',
  component: AkNotiTag,
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

const noti: AkNoti = {
  msg: 'Ooops! Something has happend. Try again later',
  icon: faFaceFrown
};

export const NotiTagIcon: Story = {
  args: {
    noti
  },
};

export const NotiTagNoIcon: Story = {
  args: {
    noti: {
      msg: noti.msg
    }
  },
};
