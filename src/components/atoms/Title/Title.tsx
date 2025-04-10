import React from 'react';

export interface TitleProps {
    /** Value */
    value: string;
}

/** Titles */
export const Title = ({
    value,
    ...props
}: TitleProps) => {

    const style = 'uppercase text-xl  font-mono font-bold block text-white';

    return (
        <h1
            className={style}
            {...props}
        >
            {value}
        </h1>
    );
};
