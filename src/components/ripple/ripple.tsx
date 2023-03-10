/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { cssVar } from 'polished';
import { MouseEvent, useLayoutEffect, useState } from 'react';

import { useTailwindYouContext } from 'components/tailwind-you-provider';
import { Bubble } from './bubble';

interface RippleProps {
  color?: 'primary' | 'on-primary' | 'on-secondary-container' | 'surface';
}

interface BubbleElement {
  x: number;
  y: number;
  size: number;
}

const useDebouncedCleanUp = (
  count: number,
  duration: number,
  cleanUpFunction: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: number | null = null;

    if (count > 0) {
      if (bounce) clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
      }, duration * 2);
    }

    return () => {
      if (bounce) clearTimeout(bounce);
    };
  }, [count, duration, cleanUpFunction]);
};

export const Ripple = ({ color = 'surface' }: RippleProps) => {
  const { isDarkClass } = useTailwindYouContext();

  const [bubbles, setBubbles] = useState<BubbleElement[]>([]);

  useDebouncedCleanUp(bubbles.length, 500, () => setBubbles([]));

  const prefix = isDarkClass ? 'dark' : 'light';
  const varName = `--ty-${prefix}-${color}`;
  const bubbleColor = cssVar(varName, '#fff');

  const addBubble = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = e.pageX - (rect.x + window.scrollX);
    const y = e.pageY - (rect.y + window.scrollY);

    const newBubble: BubbleElement = { x, y, size };

    setBubbles([...bubbles, newBubble]);
  };

  return (
    <div className="absolute inset-0" onMouseDown={addBubble}>
      {bubbles.map(({ x, y, size }, index) => (
        <Bubble
          key={`${x}-${y}-${size}-${index}`}
          size={size}
          x={x}
          y={y}
          color={bubbleColor}
        />
      ))}
    </div>
  );
};
