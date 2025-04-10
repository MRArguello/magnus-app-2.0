import type { Meta, StoryObj } from '@storybook/react';

import { SocialNetworkIcon } from './SocialNetworkIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atom/Social Network Icon',
    component: SocialNetworkIcon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof SocialNetworkIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Facebook: Story = {
    args: {
        value: 'Facebook',
    },
};

export const Instagram: Story = {
    args: {
        value: 'Instagram',
    },
};


