// --------------------------------------------------------------------------
// ✅ 웹 스토리지 동기화
// --------------------------------------------------------------------------
// - [ ] 스위치가 ON일 경우, 다크 모드로 전환되도록 설정합니다.
// - [ ] 웹 페이지를 새로고침 하더라도 상태가 유지되도록 설정합니다.
// --------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import Switcher from './components/Switcher';

const DARK_MODE_KEY = 'isDarkMode';

function SyncWebStorage() {
  // 다크모드 스위치 상태 관리 선언
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 초기화 함수는 초기화 때 한 번 실행하기 때문에
    // 그 값을 기억하기 위해서 state안에서 함수를 작성한다.

    const memoizedIsDarkMode = localStorage.getItem(DARK_MODE_KEY);
    // 웹 스토리지에 DARK_MODE_KEY 키로 저장된 데이터가 있다면?
    // 그 값을 isDarkMode의 초기값으로 설정한다.
    if (memoizedIsDarkMode) {
      const initialValue = JSON.parse(memoizedIsDarkMode);
      return initialValue;
    }
    // 웹 스토리지에 DARK_MODE_KEY 키로 저장된 데이터가 없다면?
    // false 불리언 값을 초깃값으로 설정한다.
    else {
      return false;
    }
  });

  // 사용자 액션에 따라 다크 모드 토글
  const handleToggleDarkMode = (nextIsDarkMode) => {
    setIsDarkMode(nextIsDarkMode);
  };

  useEffect(() => {
    // 로컬 or 세션 스토리지에 변경된 반응성 데이터를 키:값 형태로 저장한다.
    // localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const saveDarkMode = () => {
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDarkMode));
  };

  return (
    <main id="page">
      <h1 className="headline">웹 스토리지 동기화</h1>

      <div className="description">
        <p>이팩트를 사용해 브라우저 스토리지(Storage)와 동기화합니다.</p>
        <p>
          스토리지 데이터를 읽기/쓰기하는 것은 리액트의 렌더링 프로세스와
          관련없습니다.
        </p>
        <p>이펙트를 사용해 스토리지 데이터를 리액트 앱과 동기화 해봅니다.</p>
        <button type="button" onClick={saveDarkMode}>
          테마 저장
        </button>
      </div>

      <Switcher value={isDarkMode} onToggle={handleToggleDarkMode} />
    </main>
  );
}

export default SyncWebStorage;
