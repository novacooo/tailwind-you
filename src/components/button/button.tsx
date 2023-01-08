/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  buttonClassName?: string;
  stateLayerClassName?: string;
  textClassName?: string;
}

export const Button = ({
  children,
  variant = 'filled',
  buttonClassName,
  stateLayerClassName,
  textClassName,
  type,
  ...rest
}: ButtonProps) => (
  <button
    type={type || 'button'}
    className={clsx(
      'group relative overflow-hidden rounded-full disabled:bg-transparent disabled:shadow-none',
      variant === 'filled' && 'bg-primary hover:elevation-light-1 px-6 py-2.5',
      variant === 'outlined' &&
        'border-outline border-1 focus:border-primary px-[1.438rem] py-[0.563rem] disabled:border-none disabled:px-6 disabled:py-2.5',
      variant === 'text' && 'px-3 py-2.5',
      variant === 'tonal' &&
        'bg-secondary-container hover:elevation-light-1 px-6 py-2.5',
      buttonClassName && buttonClassName,
    )}
    {...rest}
  >
    <div
      className={clsx(
        'absolute inset-0 rounded-full opacity-0 group-hover:opacity-[.08] group-focus:opacity-[.12] group-active:opacity-[.08] group-disabled:opacity-[.12]',
        variant === 'filled' && 'bg-on-primary group-disabled:bg-on-surface',
        variant === 'outlined' &&
          'bg-primary border-on-surface group-disabled:border-1 group-disabled:bg-transparent',
        variant === 'text' && 'bg-primary group-disabled:bg-transparent',
        variant === 'tonal' &&
          'bg-on-secondary-container group-disabled:bg-on-surface',
        stateLayerClassName && stateLayerClassName,
      )}
    />
    <span
      className={clsx(
        'text-label-lg group-disabled:text-on-surface group-disabled:opacity-[.38]',
        variant === 'filled' && 'text-on-primary',
        variant === 'outlined' && 'text-primary',
        variant === 'text' && 'text-primary',
        variant === 'tonal' && 'text-on-secondary-container',
        textClassName && textClassName,
      )}
    >
      {children}
    </span>
  </button>
);
