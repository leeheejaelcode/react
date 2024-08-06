// --------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// --------------------------------------------------------------------------
// - [x] `count` 속성(prop, 기본값: 1)을 전달받아 화면에 표시
// - [x] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [x] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함
// - [x] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [x] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [x] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [x] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작거나 같을 경우 감소 버튼 비활성화
// - [x] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 크거나 같을 경우 증가 버튼 비활성화
// --------------------------------------------------------------------------
import { number } from 'prop-types';
import { useState } from 'react';
import './Count.css';

Counter.propTypes = {
  count: number,
  step: number,
  min: number,
  max: number,
};

/**@type {({count? : number, step? : number, min? : number, max? : number})} */
function Counter({ count: initialCount = 1, step = 1, min = 1, max = 10 }) {
  // only state
  // const [count] = useState(initialCount);
  // only updator function
  // const [, setCount] = useState(initialCount);

  const [count, setCount] = useState(
    /*초기값 설정*/ () => {
      if (initialCount < min || initialCount > max) {
        throw new Error('count값이 min보다 작거나 max보다 큽니다.');
      }
      return initialCount;
    }
  );

  const handleDecrease = () => {
    const nextCount = count - step;
    setCount(nextCount); // 렌더 트리거
  };
  const handleIncrease = () => {
    const nextCount = count + step;
    setCount(nextCount); // 렌더 트리거
  };

  // 파생된 상태
  const isDisabledDecrease = count <= min;
  const isDisabledIncrease = count >= max;

  return (
    <div className="Counter">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={isDisabledDecrease}
      >
        ➖{step}
      </button>
      <p>Count : {count}</p>
      <button
        type="button"
        onClick={handleIncrease}
        disabled={isDisabledIncrease}
      >
        ➕{step}
      </button>
    </div>
  );
}

export default Counter;
