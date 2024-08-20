import { useEffect, useState } from 'react';
import useStateWithCallback from './useStateWithCallback';

// 1. 직접 구현

/**@type {(initialValue?:boolean, callback ?: (nextState)=> void) => [isToggle,setIsToggle]} */
export function $useToggle(initialValue = false, callback) {
  // const [isToggle, setIsToggle] = useState(initialValue);
  // useEffect(() => {
  //   callback?.(isToggle);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isToggle]);
  // return [isToggle, setIsToggle];
}

// 2. 커스텀 훅 활용
/**@type {(initialValue?:boolean, callback ?: (nextState)=> void) => [isToggle,setIsToggle]} */
export function useToggle(initialValue = false, callback) {
  return useStateWithCallback(initialValue, callback);
}
