/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MouseEvent, useState } from 'react';

interface RippleBubble {
  x: number;
  y: number;
  size: number;
}

interface BubbleProps {
  size: number;
}

const Bubble = ({ size }: BubbleProps) => (
  <div style={{ width: size, height: size }} className="ripple" />
);

export const Ripple = () => {
  const [bubbles, setBubbles] = useState<RippleBubble[]>([]);

  const addBubble = (e: MouseEvent<HTMLDivElement>) => {
    const cont = e.currentTarget.getBoundingClientRect();

    const size = cont.width > cont.height ? cont.width : cont.height;

    const x = e.pageX - cont.x - size / 2;
    const y = e.pageY - cont.y - size / 2;

    const newBubble: RippleBubble = { x, y, size };

    setBubbles([...bubbles, newBubble]);
  };

  return (
    <div className="absolute inset-0" onClick={addBubble}>
      {bubbles.map(({ size }) => (
        <Bubble size={size} />
      ))}
    </div>
  );
};
