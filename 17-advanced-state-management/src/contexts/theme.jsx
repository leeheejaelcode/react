import { createContext, useContext } from 'react';

const themeContext = createContext();

export function ThemeProvider(props) {
  return <themeContext.Provider {...props} />;
}

export function useTheme() {
  const themeValue = useContext(themeContext);

  if (!themeValue) {
    throw new Error(
      'useTheme() 혹은 ThemeContext의 내부에서만 사용 가능합니다.'
    );
  }
}
