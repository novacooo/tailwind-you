import { useEffect, useRef, useState } from 'react';

export const Ripple = () => {
  const [size, setSize] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const parentEl = ref.current.parentElement;
    if (!parentEl) return;

    const width = parentEl.offsetWidth;
    const height = parentEl.offsetHeight;

    const newSize = width > height ? width : height;

    setSize(newSize);
    setSize(newSize);
  }, [ref]);

  return (
    <div ref={ref} style={{ width: size, height: size }} className="ripple" />
  );
};
