function NavContents() {
  // 컴포넌트 바디(함수 몸체) 영역
  // 리액트 렌더링 프로세스와 관련된 것만 코드 작성

  // 이벤트 핸들러
  // 1. 컴포넌트 내부 정의
  // 이벤트 핸들러는 컴포넌트 안에서 작성하기

  // 사이드 이펙트 코드 작성
  // - 컴포넌트 바디영역에서 작성 금지
  // const firstLink = document.querySelector('[href="#jsx-markup"]');
  // firstLink.dataset.element = 'a';
  // console.log(firstLink);
  const handleClickFirstLink = () => {
    const firstLink = document.querySelector('[href="#jsx-markup"]');
    firstLink.dataset.element = 'jsx-markup';
    console.log(firstLink);
  };

  const handleClickLastLink = () => {
    // 사이드 이펙트(부수 효과) 처리 함수
    // 사이트 이펙트: 리액트 렌더링 프로세스와 연관이 없는 것을 처리
    const lastLink = document.querySelector('[href="#responding-to-events"]');
    lastLink.dataset.element = 'responding-to-events';
    console.log(lastLink);
  };

  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a
        href="#jsx-markup"
        onClick={
          // 인라인 핸들러 연결
          // 2. JSX 내부 정의
          // 이벤트 속성(prop)에 인라인 핸들러 연결
          handleClickFirstLink
        }
      >
        JSX 마크업
      </a>
      <a
        href="#responding-to-events"
        className="active"
        onClick={handleClickLastLink}
      >
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;

// NavContents 컴포넌트 내부눈 순수해야하지만
// 내부에 사이트 이펙트 처리 함수를 작성하여 사용한다.
