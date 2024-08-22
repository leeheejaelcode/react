import useDocumentTitle from '@/hooks/useDocumentTitle';
import S from './style.module.css';
import { AppSwitch } from '@/components';
import useToggle from '@/hooks/useToggle';
import GrandParent from './components/GrandParent';
import { useTheme } from '@/contexts/theme';
import { useCallback } from 'react';

function SwitchTheme() {
  useDocumentTitle('테마 스위치');

  const [isDarkMode, setIsDarkMode] = useToggle(false);
  // const { toggleMode } = useTheme();
  const { toggleMode } = useTheme(({ toggleMode }) => toggleMode);

  // 불필요한 리렌더링을 막기위해 callback 사용
  const handleToggleTheme = useCallback(() => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    toggleMode();
  }, [setIsDarkMode, toggleMode]);

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">테마 스위치</h1>

      <div className="description">
        <p>
          <a href="https://figma.com" rel="noreferrer noopener" target="_blank">
            Figma
          </a>
          를 사용해 디자인 토큰(
          <a
            href="https://brunch.co.kr/@ultra0034/141"
            rel="noreferrer noopener"
            target="_blank"
          >
            Design Tokens
          </a>
          )을 설계하는 것과 동일한 방법으로 리액트 앱의 테마(theme)를
          설계(design)할 수 있습니다.
        </p>
        <p>
          Figma로 작성된 디자인 파일에 설계된 디자인 토큰을 살펴본 후, 리액트
          앱의 설정 또한 함께 살펴봅니다.
        </p>
      </div>

      <div style={containerStyles}>
        <AppSwitch value={isDarkMode} onToggle={handleToggleTheme} ratio={3} />
        {isDarkMode ? '라이트' : '다크'} 테마 전환
      </div>

      <div className="divider" />

      <GrandParent />
    </main>
  );
}

export default SwitchTheme;

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};
