import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atom/Title',
    component: Title,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Quiénes_Somos: Story = {
    args: {
        value: 'Quiénes Somos',
    },
};

export const Actividades_y_horarios: Story = {
    args: {
        value: 'Actividades y horarios',
    },
};


