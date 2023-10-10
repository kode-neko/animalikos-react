import type { Meta, StoryObj } from '@storybook/react';
import AkAlert from './AkAlert';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const meta: Meta<typeof AkAlert> = {
  title: 'Ak/Alert',
  component: AkAlert,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  args: {
    title: 'Eliminar',
    isVisible: true,
    icon: faTrash,
    msg: 'Fugiat fugiat enim est ullamco nisi consectetur cupidatat do aliquip.', 
    actions: [
      {
        label: 'Cancel',
        type: 'main',
        onClick: () => {}
      },
      {
        label: 'Accept',
        type: 'second',
        onClick: () => {}
      }
    ]
  },
};