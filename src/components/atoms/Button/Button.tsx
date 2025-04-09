"use client"
import React from 'react';

import clsx from 'clsx'

export interface ButtonProps {
  /** Is Disabled? */
  disabled?: boolean;
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundcolor?: string;
  /** How large should the button be? */
  size?: 'small' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  size = 'large',
  label,
  ...props
}: ButtonProps) => {

  const mode = primary ? 'font-roboto bg-[#555ab9] text-white' : 'bg-white text-black';

  const sizeTw = size === 'small' ? 'text-sm p-2' : 'p-3';

  const backgroundcolor = props.backgroundcolor ? `bg-${props.backgroundcolor}` : '';

  const style = clsx('uppercase block rounded-md font-bold cursor-pointer disabled:bg-gray-500 disabled:text-white hover:opacity-80 text-sm sm:text-base shadow-md transition-all duration-200 ease-in-out hover:scale-105 border border-solid',
    mode,
    size && sizeTw,
    props.backgroundcolor && backgroundcolor
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
