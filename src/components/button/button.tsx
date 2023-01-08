/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
}

export const Button = ({
  children,
  variant = 'filled',
  type,
  ...rest
}: ButtonProps) => (
  <button
    type={type || 'button'}
    className={clsx(
      'hover:elevation-light-1 text-label-lg disabled:text-on-surface group relative overflow-hidden rounded-full px-6 py-2.5 disabled:bg-transparent disabled:opacity-[.38] disabled:shadow-none',
      variant === 'filled' && 'bg-primary text-on-primary',
      variant === 'tonal' &&
        'bg-secondary-container text-on-secondary-container',
    )}
    {...rest}
  >
    <div
      className={clsx(
        'group-disabled:bg-on-surface absolute inset-0 opacity-0 group-hover:opacity-[.08] group-focus:opacity-[.12] group-active:opacity-[.08] group-disabled:opacity-[.12]',
        variant === 'filled' && 'bg-on-primary',
        variant === 'tonal' && 'bg-on-secondary-container',
      )}
    />
    {children}
  </button>
);
