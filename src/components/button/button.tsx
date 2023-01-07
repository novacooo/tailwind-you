interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => (
  <button
    type="button"
    className="bg-primary text-on-primary rounded-full px-6 py-3 font-medium tracking-wider"
  >
    {children}
  </button>
);
