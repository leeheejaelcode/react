// --------------------------------------------------------------------------
// ✅ 문서 제목 동기화
// --------------------------------------------------------------------------
// - [ ] 카운터 앱의 count 상태가 변경되면 문서 제목을 동기화합니다.
// - [ ] step 값이 변경될 때에는 불필요한 문서 제목 동기화가 되지 않도록 설정합니다.
// --------------------------------------------------------------------------

import { useId, useState, useEffect } from 'react';
import S from './Counter.module.css';
import { getStorageData, setStorageData } from '@/utils';

// 컴포넌트 jsx가 실제 DOM 엘리먼트로 마운트 되었나?

// 스토리지 저장할 키
// - @counter/count
// - @counter/step
// [이펙트 문서 제목 웹 스토리지 동기화]

const DOCUMENT_TITLE = document.title;
const COUNT_STEP = 'count_step';
const INITIAL = {
  count: 10,
  step: 1,
};

// const COUNT = "COUNT"
// const STEP = "STEP"

function Counter() {
  // useEffect (effectCallback,[dependencies])이펙트
  // 첫번째 인수 = 이펙트 콜백 함수
  // - DOM 커밋 이후 시점에 실행
  // - 상태가 업데이트 될 때마다 실행
  // 두번째 인수 = 종속성(의존성)배열
  // - 아예 설정되지 않은 경우(undefined), 매번 실행된다. 렌더링시마다 매번 실행된다)
  // - 배열이 비어있는 경우, 마운트 시점에서 1회 실행된다.

  useEffect(() => {
    // 이 안에서 리액트 엘리먼트로 작성한 요소에 접근이 가능할까?
    const increaseButton = document.querySelector("[aria-label='카운트 증가']");
    const decreaseButton = document.querySelector("[aria-label='카운트 감소']");
    increaseButton.setAttribute(
      'title',
      increaseButton.getAttribute('aria-label')
    );

    decreaseButton.setAttribute(
      'title',
      decreaseButton.getAttribute('aria-label')
    );
  }, []);

  const id = useId();
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // useEffect(() => {
  //   // 외부 시스템인 브라우저의 문서 제목을 변경하려 한다.
  //   document.title = `(${count})` + DOCUMENT_TITLE;
  // }, [count]);

  // useEffect(() => {
  //   // 외부 시스템인 브라우저의 문서 제목을 변경하려 한다.
  //   console.log(`step이 ${step}로 변경됐어요~`);
  // }, [step]);

  // 반응성 데이터인 상태를 객체로 관리
  // 객체로 관리
  const [state, setState] = useState(() => getStorageData(COUNT_STEP, INITIAL));
  const { count, step } = state;

  // useEffect(() => {
  //   setStorageData(COUNT_STEP, state);
  // }, [state]);
  // 객체로 관리

  // 따로 관리
  // const [count, setCount] = useState(() => getStorageData(COUNT, INITIAL.count));
  // const [step, setStep] = useState(() => getStorageData(STEP, INITIAL.step));

  // useEffect(() => {
  //   document.title = `(${count})` + DOCUMENT_TITLE;
  //   setStorageData(COUNT, INITIAL.count);
  // }, [count]);

  // useEffect(() => {
  //   console.log(`step이 ${step}로 변경됐어요~`);
  //   setStorageData(STEP, INITIAL.step);
  // }, [step]);

  // 이벤트로 저장
  const handleSaveToStorage = () => {
    setStorageData(COUNT_STEP, state);
  };

  useEffect(() => {
    document.title = `(${count})` + DOCUMENT_TITLE;
    console.log(`step이 ${step}로 변경됐어요~`);
  }, [count, step]);

  const handleDecrease = () => {
    let nextCount = count - step;
    if (nextCount <= 1) nextCount = 1;
    setState({ ...state, count: nextCount });
  };

  const handleIncrease = () => {
    setState({ ...state, count: count + step });
  };

  const handleChangeStep = (e) => {
    setState({ ...state, step: Number(e.target.value) });
  };

  const isDisabled = count <= 1;

  return (
    <>
      <div className={S.component}>
        <div style={{ marginBlockEnd: 20 }}>
          <button type="button" onClick={handleSaveToStorage}>
            이벤트로 웹 스토리지 동기화
          </button>
        </div>
        <button
          type="button"
          aria-label="카운트 감소"
          disabled={isDisabled}
          onClick={handleDecrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            width={12}
            height={12}
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <output>{count}</output>
        <button type="button" aria-label="카운트 증가" onClick={handleIncrease}>
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className={S.changeStep}>
        <label htmlFor={id}>step 변경</label>
        <input type="number" id={id} value={step} onChange={handleChangeStep} />
      </div>
    </>
  );
}

export default Counter;
