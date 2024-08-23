import { create } from 'zustand';

export const useCountStore = create((set, get, store) => {
  const increment = () =>
    set(({ count, step, max }) => {
      let nextCount = count + step;
      if (nextCount >= max) nextCount = max;
      return { count: nextCount };
    });
  const decrement = () =>
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });
  const reset = () => set(store.getInitialState());

  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    reset,
  };
});
