import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Push Me',
        size: "large",
        viewport: "desktop"
    },
};

export const Secondary: Story = {
    args: {
        label: 'Push Me',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Push Me',
        disabled: true,
    },
};

export const Custom_Color: Story = {
    args: {
        label: 'Push Me',
        primary: true,
        backgroundColor: '#4a008c',
    },
};
export const Custom_Color2: Story = {
    args: {
        label: 'Push Me',
        primary: true,
        backgroundColor: '#e65100',
    },
};


export const Desktop_Large: Story = {
    args: {
        size: 'large',
        label: 'Push Me',

        viewport: "desktop",
    },
};

export const Desktop_Small: Story = {
    args: {
        size: 'small',
        label: 'Push Me',
        viewport: "desktop",
    },
};

export const Mobile_Large: Story = {
    args: {
        size: 'large',
        label: 'Push Me',

        viewport: "mobile",
    },
};

export const Mobile_Small: Story = {
    args: {
        size: 'small',
        label: 'Push Me',
        viewport: "mobile",
    },
};
