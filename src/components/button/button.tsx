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
      'group relative h-10 overflow-hidden rounded-full px-6 disabled:bg-transparent disabled:shadow-none dark:disabled:bg-transparent',
      variant === 'filled' &&
        'bg-primary-light dark:bg-primary-dark hover:elevation-light-1',
      variant === 'outlined' &&
        'border-outline-light dark:border-outline-dark border-1 focus:border-primary-light dark:focus:border-primary-dark px-[1.438rem] disabled:border-none disabled:px-6',
      variant === 'text' && 'px-3',
      variant === 'elevated' &&
        'bg-surface-light dark:bg-surface-dark elevation-light-1 hover:elevation-light-2',
      variant === 'tonal' &&
        'bg-secondary-container-light dark:bg-secondary-container-dark hover:elevation-light-1',
      buttonClassName && buttonClassName,
    )}
    {...rest}
  >
    <div
      className={clsx(
        'absolute inset-0 rounded-full opacity-0 group-hover:opacity-[.08] group-focus:opacity-[.12] group-active:opacity-[.08] group-disabled:opacity-[.12]',
        variant === 'filled' &&
          'bg-on-primary-light dark:bg-on-primary-dark group-disabled:bg-on-surface-light dark:group-disabled:bg-on-surface-dark',
        variant === 'outlined' &&
          'bg-primary-light dark:bg-primary-dark border-on-surface-light dark:border-on-surface-dark group-disabled:border-1 group-disabled:bg-transparent',
        variant === 'text' &&
          'bg-primary-light dark:bg-primary-dark group-disabled:bg-transparent',
        variant === 'elevated' &&
          'bg-primary-light dark:bg-primary-dark group-disabled:bg-on-surface-light dark:group-disabled:bg-on-surface-dark opacity-5',
        variant === 'tonal' &&
          'bg-on-secondary-container-light dark:bg-on-secondary-container-dark group-disabled:bg-on-surface-light dark:group-disabled:bg-on-surface-dark',
        stateLayerClassName && stateLayerClassName,
      )}
    />
    <span
      className={clsx(
        'text-label-lg group-disabled:text-on-surface-light dark:group-disabled:text-on-surface-dark group-disabled:opacity-[.38]',
        variant === 'filled' &&
          'text-on-primary-light dark:text-on-primary-dark',
        variant === 'outlined' && 'text-primary-light dark:text-primary-dark',
        variant === 'text' && 'text-primary-light dark:text-primary-dark',
        variant === 'elevated' && 'text-primary-light dark:text-primary-dark',
        variant === 'tonal' &&
          'text-on-secondary-container-light dark:text-on-secondary-container-dark',
        textClassName && textClassName,
      )}
    >
      {children}
    </span>
  </button>
);
