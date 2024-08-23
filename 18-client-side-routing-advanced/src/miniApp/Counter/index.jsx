import { memo, useMemo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
// import useCounter from '@/hooks/useCounter';
import CountButton from './CountButton';
import CountOutput from './CountDisplay';
import S from './style.module.css';
import { useCountStore } from './@store';

function Counter() {
  const [count, step, max, min] = useCountStore((s) => [
    s.count,
    s.step,
    s.max,
    s.min,
  ]);
  // const C = useCounter({ max: 10 });

  // const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } = C;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  return (
    <div className={S.component}>
      <CountOutput />
      <div role="group" className={S.group}>
        <CountButton
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
        >
          {useMemo(
            () => (
              <GrFormUp />
            ),
            []
          )}
        </CountButton>
        <CountButton
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
          type="-"
        >
          {useMemo(
            () => (
              <GrFormDown />
            ),
            []
          )}
        </CountButton>
      </div>
    </div>
  );
}

export default memo(Counter);
