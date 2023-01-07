/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    type="button"
    className="bg-primary hover:elevation-light-1 text-label-lg text-on-primary disabled:text-on-surface group relative overflow-hidden rounded-full px-6 py-2.5 disabled:bg-transparent disabled:opacity-[.38] disabled:shadow-none"
    {...rest}
  >
    <div className="bg-on-primary group-disabled:bg-on-surface absolute inset-0 opacity-0 group-hover:opacity-[.08] group-focus:opacity-[.12] group-active:opacity-[.08] group-disabled:opacity-[.12]" />
    {children}
  </button>
);
