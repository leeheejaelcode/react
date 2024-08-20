import { useEffect } from 'react';
import { useRef } from 'react';

export default function useRenderCount() {
  // useRef 사용

  const renderCountRef = useRef(null);

  useEffect(() => {
    renderCountRef.current++;
  });
  return renderCountRef.current;
}
