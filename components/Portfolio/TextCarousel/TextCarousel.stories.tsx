import type { Meta, StoryObj } from '@storybook/react';
import TextCarousel from './TextCarousel';
import { projectDetailsQuotes } from '../ProjectDetailsSlide/ProjectDetailsSlide.config';

const meta: Meta<typeof TextCarousel> = {
  title: 'Portfolio/TextCarousel',
  component: TextCarousel,
};

export default meta;

type Story = StoryObj<typeof TextCarousel>;

export const Default: Story = {
  args: {
    quotes: projectDetailsQuotes,
  },
};