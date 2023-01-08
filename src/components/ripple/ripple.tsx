/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MouseEvent, useLayoutEffect, useState } from 'react';

interface RippleBubble {
  x: number;
  y: number;
  size: number;
}

interface BubbleProps {
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

const Bubble = ({ x, y, size }: BubbleProps) => (
  <div
    style={{ left: x, top: y, width: size, height: size }}
    className="ripple"
  />
);

export const Ripple = () => {
  const [bubbles, setBubbles] = useState<RippleBubble[]>([]);

  useDebouncedCleanUp(bubbles.length, 500, () => {
    setBubbles([]);
  });

  const addBubble = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = e.pageX - (rect.x + window.scrollX);
    const y = e.pageY - (rect.y + window.scrollY);

    const newBubble: RippleBubble = { x, y, size };

    setBubbles([...bubbles, newBubble]);
  };

  return (
    <div className="absolute inset-0" onClick={addBubble}>
      {bubbles.map(({ x, y, size }, index) => (
        <Bubble key={`${x}-${y}-${size}-${index}`} size={size} x={x} y={y} />
      ))}
    </div>
  );
};
