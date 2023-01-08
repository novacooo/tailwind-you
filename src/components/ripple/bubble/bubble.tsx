import { useTailwindYouContext } from 'components/tailwind-you-provider';
import { cssVar, transparentize } from 'polished';

interface BubbleProps {
  x: number;
  y: number;
  size: number;
}

export const Bubble = ({ x, y, size }: BubbleProps) => {
  const { isDarkClass } = useTailwindYouContext();

  const varName = isDarkClass ? '--ty-dark-surface' : '--ty-light-surface';
  const color = cssVar(varName, '#fff');

  const color0 = transparentize(1, color.toString());
  const color20 = transparentize(0.8, color.toString());
  const color30 = transparentize(0.7, color.toString());

  const background = `radial-gradient(
    circle,
    ${color20} 0%,
    ${color30} 33%,
    ${color0} 50%
  )`;

  return (
    <div
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background,
      }}
      className="ripple"
    />
  );
};
