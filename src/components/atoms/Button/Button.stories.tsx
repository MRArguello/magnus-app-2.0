import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        backgrounds: {
            // 👇 Set default background value for all component stories
            default: 'dark',
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Registrarse',
        size: "large",
    },
};

export const Secondary: Story = {
    args: {
        label: 'Ingresar',
        primary: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Anotarse',
        disabled: true,
    },
};

export const Custom_Color: Story = {
    args: {
        label: 'Anotarse',
        className: 'bg-red-600',
    },
};
export const Custom_Color2: Story = {
    args: {
        label: 'Anotarse',
        className: 'bg-green-800',
    },
};


export const Large: Story = {
    args: {
        size: 'large',
        label: 'Anotarse',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Anotarse',
    },
};
