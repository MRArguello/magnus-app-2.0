import React, { JSX } from 'react';
import clsx from 'clsx';

export type TitleProps<T extends keyof JSX.IntrinsicElements = 'h1'> = {
    /** Text to display */
    value: string;
    /** Additional Tailwind classes */
    className?: string;
    /** Optional heading level (e.g., h1, h2...) */
    as?: T;
} & React.ComponentPropsWithoutRef<T>;

/** Reusable Title Component */
export const Title = <T extends keyof JSX.IntrinsicElements = 'h1'>({
    value,
    className,
    as,
    ...props
}: TitleProps<T>) => {
    const Component = (as || 'h1') as keyof JSX.IntrinsicElements;

    const classes = clsx(
        'uppercase font-bold block text-white text-center',
        className
    );

    return React.createElement(
        Component,
        { className: classes, ...props },
        value
    );
};