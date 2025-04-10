"use client"
import React from 'react';

import clsx from 'clsx'

export interface ButtonProps {
  /** Is Disabled? */
  disabled?: boolean;
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional className */
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  size = 'large',
  label,
  className,
  ...props
}: ButtonProps) => {

  const mode = primary ? 'bg-white text-black ' : 'bg-black text-white';

  const sizeTw = size === 'small' ? 'text-sm p-2' : 'p-3';

  const style = clsx('font-roboto uppercase block  font-bold cursor-pointer disabled:bg-gray-500 disabled:text-white hover:opacity-80 text-sm sm:text-base ',
    !className?.includes('bg-') && mode,
    size && sizeTw,
    className
  );

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className={style}
      {...props}
    >
      {label}
    </button>
  );
};
