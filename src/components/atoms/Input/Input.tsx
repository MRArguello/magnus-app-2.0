"use client";
import React from "react";
import clsx from "clsx";

export interface InputProps {
    /** Placeholder text */
    placeholder: string;
    /** Optional className for styling */
    className?: string;
    /** Type */
    type?: React.HTMLInputTypeAttribute | 'textarea' | undefined;
    /** onChange() */
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Value */
    value?: string | undefined;
}

/** Primary UI component for Input */
export const Input: React.FC<InputProps> = ({
    className,
    placeholder,
    type,
    value,
    onChange,
    ...props
}) => {
    const inputClasses = clsx(
        "m-1 rounded-none border-none text-center border-l-4 placeholder:text-center focus:outline-none",
        className
    );

    return (
        <>
            {type === "textarea" ? (
                <textarea
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value ?? ""}
                    onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                    {...props}
                />
            ) : (
                <input
                    type={type ?? "text"}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value ?? ""}
                    onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
                    {...props}
                />
            )}
        </>
    )
}    
