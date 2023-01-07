interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => (
  <button
    type="button"
    className="bg-primary hover:elevation-light-1 text-on-primary dark:hover:elevation-dark-1 rounded-full px-6 py-3 font-medium tracking-wider"
  >
    {children}
  </button>
);
