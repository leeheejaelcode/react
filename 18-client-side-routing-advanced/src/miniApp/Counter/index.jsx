import { memo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
// import useCounter from '@/hooks/useCounter';
import CountButton from './CountButton';
import CountOutput from './CountDisplay';
import S from './style.module.css';
import { create } from 'zustand';

const useCountStore = create((set, get, store) => {
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

function Counter() {
  const { count, step, increment, decrement, min, max, reset } =
    useCountStore();
  // const C = useCounter({ max: 10 });

  // const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } = C;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  return (
    <div className={S.component}>
      <CountOutput count={count} />
      <div role="group" className={S.group}>
        <CountButton
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
          onUpdate={increment}
        >
          <GrFormUp />
        </CountButton>
        <CountButton
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
          onUpdate={decrement}
        >
          <GrFormDown />
        </CountButton>
      </div>
    </div>
  );
}

export default memo(Counter);
