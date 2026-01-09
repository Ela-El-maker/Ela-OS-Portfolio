import type { Meta, StoryObj } from '@storybook/react';
import ActionButton from './ActionButton';
import { FiCast } from 'react-icons/fi';

const meta: Meta<typeof ActionButton> = {
  title: 'Portfolio/ActionButton',
  component: ActionButton,
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Primary: Story = {
  args: {
    buttonText: 'Explore Project',
    icon: <FiCast className="action-icon" />,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
  },
};

export const AsLink: Story = {
  args: {
    ...Primary.args,
    renderAsLink: true,
    href: 'https://github.com',
  },
};