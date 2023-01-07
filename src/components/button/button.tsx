interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => (
  <button
    type="button"
    className="bg-primary hover:elevation-light-1 text-on-primary group relative overflow-hidden rounded-full px-6 py-3 font-medium tracking-wider disabled:bg-red-500"
  >
    <div className="bg-on-primary absolute inset-0 opacity-0 group-hover:opacity-[.08] group-focus:opacity-[.12] group-active:opacity-[.08]" />
    {children}
  </button>
);
