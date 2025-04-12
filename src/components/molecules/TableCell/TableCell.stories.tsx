import type { Meta, StoryObj } from '@storybook/react';


import { TableCell } from './TableCell';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Molecules/TableCell',
    component: TableCell,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Rojo: Story = {
    args: {
        clase: 'TAEKWONDO ITF adolescentes Y adultos',
        horario: '10:00 - 11:00',
        color: 'bg-red-500',
    },
};
