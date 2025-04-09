import React from 'react';
import './button.css';
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
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {


  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}

      className={clsx('storybook-button',
        size && `storybook-button--${size}`,

        mode)}

      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
