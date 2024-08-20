import S from './style.module.css';
import useCounter from '@/hooks/useCounter';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
export default function CounterAPP() {
  const counterState = useCounter({ count: 1, max: 10, step: 2 });
  const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } =
    counterState;

  return (
    <main className={S.component}>
      <h1 className="headline">카운터 앱</h1>
      <div className="description">
        <p>useCounter() 훅을 사용해 카운터 앱 기능 구현</p>
      </div>

      <output>{count}</output>
      <button
        type="button"
        title={`${step} 증가`}
        aria-label={`${step}증가`}
        disabled={isMaxDisabled}
        onClick={increment}
      >
        <FaArrowAltCircleUp />
      </button>
      <button
        type="button"
        title={`${step} 감소`}
        aria-label={`${step}감소`}
        disabled={isMinDisabled}
        onClick={decrement}
      >
        <FaArrowAltCircleDown />
      </button>
    </main>
  );
}
