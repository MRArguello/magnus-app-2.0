import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atoms/Input',
    component: Input,
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
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    /*     argTypes: {
            backgroundcolor: { control: 'color' },
        }, */
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Email: Story = {
    args: {
        placeholder: 'Email',
        type: 'email',
    },
};

export const Password: Story = {
    args: {
        placeholder: 'Password',
        type: 'password',
        value: '123456',
    },
};

export const Nombre: Story = {
    args: {
        placeholder: 'Nombre',
        value: 'Juan de los Palotes',
    },
};

export const ID_del_gimnasio: Story = {
    args: {
        placeholder: 'ID del gimnasio',
    },
};
export const Textarea: Story = {
    args: {
        placeholder: 'Textarea example',
        type: 'textarea',
    },
};


