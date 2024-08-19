import { useCallback, useState } from 'react';
import useEventListener from './useEventListener';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseTracking = useCallback(({ pageX: x, pageY: y }) => {
    setMousePosition({ x, y });
  }, []);

  useEventListener(document, 'mousemove', onMouseTracking);
  return mousePosition;
}
