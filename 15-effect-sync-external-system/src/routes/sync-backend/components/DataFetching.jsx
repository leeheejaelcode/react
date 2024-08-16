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

// eslint-disable-next-line no-unused-vars
const ENDPOINT =
  'https://yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  // 서버에 요청해서 데이터를 가져올 때
  // 클라이언트 환경에 리액트를 사용해 고려해야할 상태는 무엇 무엇을 선언해야 할까요?

  // [상태 선언] -----------------------------------------------------------
  // 로딩 중인지 여부
  const [isLoading, setIsLoading] = useState(false);
  // 오류가 발생했나요? 여부
  const [error, setError] = useState(null);
  // 응답이 성공한 경우, 앱에 설정할 데이터 선택
  const [data, setData] = useState(null);

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

  useEffect(() => {
    setIsLoading(true);
    const fetchOliveOli = async () => {
      const response = await fetch(ENDPOINT + '/dd');
      const responseData = await response.json();
      if (!response.ok) {
        setError(responseData);
      } else {
        setData(responseData);
      }
      setIsLoading(false);
    };
    fetchOliveOli();
  }, []);

  // 조건부 렌더링

  // 로딩중인가?
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  if (data) {
    console.log(data.items);
  }

  // 오류가 발생했는가?
  // 데이터가 존재하는가?
  return (
    <div className={S.component}>
      <p>서버에 데이터 가져오기 요청 후, 앱 화면 업데이트</p>
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
function Error({ error }) {
  return (
    <p role="alert">
      오류 발생! <span style={{ color: 'red' }}>{error.message}</span>
    </p>
  );
}
