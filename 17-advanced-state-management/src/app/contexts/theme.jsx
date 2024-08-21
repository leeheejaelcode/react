import * as React from 'react';
import { array, node, object, oneOfType } from 'prop-types';
import { primitives, semantics } from '../theme';

// 1. 컨텍스트 객체 생성하기
const themeContext = React.createContext();

// 2. 컨텍스트 프로바이더 래퍼(감싸는) 컴포넌트 작성해 내보내기
ThemeProvider.propTypes = {
  children: node.isRequired,
};

export function ThemeProvider({ children }) {
  const themeValue = React.useMemo(
    () => ({
      primitives,
      semantics,
    }),
    []
  );

  return (
    <themeContext.Provider value={themeValue}>{children}</themeContext.Provider>
  );
}

// 3. 컨텍스트 값을 컨텍스트에 포함된 하위 컴포넌트에서 가져오게 하는 커스텀 훅 함수 작성해 내보내기
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return React.useContext(themeContext);
}
