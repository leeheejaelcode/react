import { useState, useCallback } from 'react';
import useEventListener from './useEventListener';
import { useDebugValue } from 'react';
// import { useSyncExternalStore } from 'react';

export default function useOnline() {
  // 상태 선언
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);
  const online = useCallback(() => setIsOnline(true), []);
  const offline = useCallback(() => setIsOnline(false), []);
  // 이펙트 감지
  useEventListener(globalThis, 'online', online);
  useEventListener(globalThis, 'offLine', offline);

  useDebugValue(isOnline, () => (isOnline ? 'Online' : 'Offline'));
  return isOnline;
}

// export default function useOnline() {
//   const isOnline = useSyncExternalStore(subscribe, getSnapshot);
//   return isOnline;
// }

// function subscribe(callback) {
//   globalThis.addEventListener('online', callback);
//   globalThis.addEventListener('offline', callback);

//   return () => {
//     globalThis.removeEventListener('online', callback);
//     globalThis.removeEventListener('offline', callback);
//   };
// }

// function getSnapshot() {
//   return navigator.onLine;
// }
