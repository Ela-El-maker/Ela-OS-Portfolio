import type { Meta, StoryObj } from '@storybook/react';
import WaveDivider from './WaveDivider';

const meta: Meta<typeof WaveDivider> = {
  title: 'Portfolio/Wave Dividers',
  component: WaveDivider,
  // This helps Storybook understand how to render the component in the UI
  argTypes: {
    dividerHeight: { control: 'text' },
    margin: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof WaveDivider>;

export const WhatsHotDivider: Story = {
  args: {
    waveImg: '/images/blobs/4.svg',
    dividerHeight: '150px',
  },
};