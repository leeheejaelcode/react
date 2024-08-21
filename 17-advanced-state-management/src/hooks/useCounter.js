import { useState, useCallback, useMemo } from 'react';

function useCounter({
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 100,
} = {}) {
  const [count, setCount] = useState(initialCount);

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  // useCallback 훅은 오직 함수 값만 기억
  const reset = useCallback(() => setCount(initialCount), [initialCount]);
  // useMemo 훅은 모든 값을 기억 (함수 포함)
  const reset2 = useMemo(() => () => setCount(initialCount), [initialCount]);
  // 함수를 기억하려면 callback 훅을 사용하는게 좋다

  const increment = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c + step;
        if (nextCount >= max) nextCount = max;
        return nextCount;
      }),
    [step, max]
  );

  const decrement = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c - step;
        if (nextCount <= min) nextCount = min;
        return nextCount;
      }),
    [step, min]
  );

  const returnValue = useMemo(
    () => ({
      count,
      step,
      isMinDisabled,
      isMaxDisabled,
      increment,
      decrement,
      reset,
      reset2,
    }),
    [
      count,
      step,
      isMinDisabled,
      isMaxDisabled,
      increment,
      decrement,
      reset,
      reset2,
    ]
  );

  return returnValue;
  // return {
  //   count,
  //   step,
  //   isMinDisabled,
  //   isMaxDisabled,
  //   increment,
  //   decrement,
  //   reset,
  //   reset2,
  // };
}

export default useCounter;
