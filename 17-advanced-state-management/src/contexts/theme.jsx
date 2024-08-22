import { primitives, semantics } from '@/theme';
import { createContext, useContext, useState, useMemo } from 'react';
import { THEME_MODE } from '@/theme/semantics';

const { LIGHT, DARK } = THEME_MODE;

const themeContext = createContext();

export function ThemeProvider(props) {
  const [mode, setMode] = useState(LIGHT);

  const themeValue = useMemo(
    () => ({
      ToggleThemeMode: () => {
        const nextMode = mode === LIGHT ? DARK : LIGHT;
        setMode(nextMode);
      },
      theme: semantics[mode],
      color: primitives.color,
    }),
    [mode]
  );
  return <themeContext.Provider value={themeValue} {...props} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const themeValue = useContext(themeContext);

  if (!themeValue) {
    throw new Error(
      'useTheme() 혹은 ThemeContext의 내부에서만 사용 가능합니다.'
    );
  }
  return themeValue;
}
