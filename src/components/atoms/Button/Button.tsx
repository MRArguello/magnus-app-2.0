"use client"
import React from 'react';

import clsx from 'clsx'

export interface ButtonProps {
  /** Is Disabled? */
  disabled?: boolean;
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'large';
  /** Button contents */
  label: string;

  /** Viewport type */
  viewport?: 'desktop' | 'mobile';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'large',

  label,
  ...props
}: ButtonProps) => {

  const mode = primary ? 'bg-[#555ab9] text-white' : 'storybook-button--secondary';

  const style = clsx(mode,
    size && `storybook-button--${size}`,
    props.backgroundColor && `bg-${props.backgroundColor}`
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
