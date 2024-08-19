import { useEffect } from 'react';

/** @type { (target: Document | HTMLElement, eventType: string, eventHandler: () => void) => void} */
function useEventListener(target, eventType, eventHandler) {
  useEffect(() => {
    target.addEventListener(eventType, eventHandler);

    return () => {
      target.removeEventListener(eventType, eventHandler);
    };
  }, [target, eventType, eventHandler]);
}

export default useEventListener;
