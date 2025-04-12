import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select } from './Select';

const meta = {
    title: 'Atoms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
        backgrounds: {
            // 👇 Set default background value for all component stories
            default: 'dark',
        },
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Actividades: Story = {
    args: {
        options: [
            { value: '*', label: 'Todas las categorías' },
            { value: 'am', label: 'Artes Marciales' },
            { value: 'f', label: 'Fitness' },
            { value: 'i', label: 'Indoor' },
            { value: 'inf', label: 'Infantil' },
        ],
        onChange: fn(),
    },
};
