import type { Meta, StoryObj } from '@storybook/react';

import { Whatsapp } from './Whatsapp';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Molecules/Whatsapp',
    component: Whatsapp,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Whatsapp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unique_Test: Story = {
    args: {

    },
};

