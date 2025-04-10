"use client";
import React from "react";
import clsx from "clsx";

export interface SelectProps {
    /** Optional className for styling */
    className?: string;
    /** onChange() */
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    /** Value */
    value?: string | undefined;
    /** Options */
    options: { value: string; label: string }[];
}

/** Select component  */
export const Select: React.FC<SelectProps> = ({
    className,
    value,
    options,
    onChange,
    ...props
}) => {
    const inputClasses = clsx(
        "rounded-none text-zinc-200 border-zinc-500 focus:border-zinc-300 p-2 md:p-3 border",
        className
    );

    return (
        <select
            className={inputClasses}
            value={value ?? ""}
            onChange={onChange}
            {...props}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}