// --------------------------------------------------------------------------
// ✅ 데이터 패칭
// --------------------------------------------------------------------------
// - [ ] API 서버에 데이터를 요청해 응답받은 데이터를 렌더링합니다.
// - [ ] 이펙트를 사용해 Promise 또는 Async / await를 사용해 데이터 가져오기를 요청합니다.
// - [ ] 데이터 가져오기 요청 응답이 성공인 경우, 리액트 앱에 데이터를 렌더링합니다.
// - [ ] 데이터 가져오기 요청 응답에 문제가 발생한 경우, 리액트 앱에 오류 메시지를 렌더링합니다.
// - [ ] 개발 중에는 <StrictMode>에 의해 컴포넌트의 이펙트가 2번 실행됩니다.
// - [ ] 이펙트 콜백 함수(1) → 클린업 함수(2) → 이펙트 콜백 함수(2) 순으로 실행됩니다.
// - [ ] 관련없는 패치가 앱에 영향을 주지않도록 클린업 함수에서 무시하도록 설정합니다.
// - [ ] AbortController를 사용해 중복된 네트워크 요청을 중단합니다.
// --------------------------------------------------------------------------
// ✅ 이펙트가 아닌 경우
// --------------------------------------------------------------------------
// - [ ] 애플리케이션 초기화 (컴포넌트 외부에서 실행: 1회 실행 보장)
// - [ ] 사용자 액션에 의해 실행되는 기능 (이벤트 사용)
// --------------------------------------------------------------------------

import S from './DataFetching.module.css';
import { useState, useEffect } from 'react';
import { string, exact } from 'prop-types';
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const ENDPOINT =
  'https://yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });
  // 서버에 요청해서 데이터를 가져올 때
  // 클라이언트 환경에 리액트를 사용해 고려해야할 상태는 무엇 무엇을 선언해야 할까요?

  // [상태 선언] -----------------------------------------------------------
  // 로딩 중인지 여부
  // const [isLoading, setIsLoading] = useState(false);
  // // 오류가 발생했나요? 여부
  // const [error, setError] = useState(null);
  // // 응답이 성공한 경우, 앱에 설정할 데이터 선택
  // const [data, setData] = useState(null);

  // [백앤드 환경과 동기화]
  // promise 방법
  // useEffect(() => {
  //   // 백엔드 환경에 요청 및 응답 처리
  //   setIsLoading(true);
  //   // 백엔드 환경에 요청 및 응답 처리
  //   fetch(ENDPOINT)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((responsesData) => {
  //       if ('code' in responsesData && 'message' in responsesData) {
  //         throw new Error(responsesData.message);
  //       }
  //       setData(responsesData);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setIsLoading(false);
  //     });
  //   return () => {};
  // }, []);

  // async / await 방법

  // 마운트 -> 언마운트 -> 리마운트
  // 중복된 네트워크 요청 중단
  // 네트워크 요청 1회 성공시
  // 상태 업데이트 1회 진행
  useEffect(() => {
    // 지역 변수 설정
    // 무시할 것인가?
    // let ignore = false;

    const abortController = new AbortController();
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    const fetchOliveOli = async () => {
      try {
        const response = await axios.get(ENDPOINT, {
          signal: abortController.signal,
        });

        setState((prevState) => ({
          ...prevState,
          data: response.data,
          isLoading: true,
        }));
      } catch (error) {
        // 중복된 요청 취소를 오류로 보지 않음
        // 그 이외의 오류가 발생한 경우 오류로 봄
        if (error.name !== 'CanceledError') {
          setState((prevState) => ({
            ...prevState,
            error,
            isLoading: false,
          }));
        }
      }
    };

    fetchOliveOli();
    return () => {
      // ignore = true;
      // AbortController 인스턴스의 abort() 메서드를 사용해 이전 요청을 중단
      abortController.abort();
    };
    // 무한 로딩되는걸 방지하기 위해서
    // 빈 종속성 배열 추가
  }, []);

  // 조건부 렌더링

  // 로딩중인가?
  if (state.isLoading) {
    return <Loading />;
  }
  if (state.error) {
    return <Error error={state.error} />;
  }

  // 오류가 발생했는가?
  // 데이터가 존재하는가?
  return (
    <div className={S.component}>
      <ul>
        {state.data?.items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default DataFetching;

function Loading() {
  return <p>데이터 로딩 중입니다.</p>;
}

Error.propTypes = {
  error: exact({
    message: string.isRequired,
  }).isRequired,
};
function Error({ state }) {
  return (
    <p role="alert">
      오류 발생! <span style={{ color: 'red' }}>{state.error}</span>
    </p>
  );
}
