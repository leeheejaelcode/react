import { useState } from 'react';
import S from './PrintMousePosition.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useEventListener from '@/hooks/useEventListener';
import { useCallback } from 'react';

function PrintMousePosition() {
  const documentTitle = '마우스 위치 추적 ⬅️ 이펙트 동기화 & 정리';
  useDocumentTitle(documentTitle);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mousePosition;

  // 처음 정의된 이후 종속성 배열이 비어 있기 때문에
  // 이 함수 참조는 리-렌더링 과정에서 항상 동일하다.

  // 이벤트 핸들러를 매번 구독 해지를 하기 때문에
  // useCallback 훅을 사용해서 동일 참조를 시켜서
  // 불필요한 렌더링을 제거해줍니다

  const onMouseTracking = useCallback(({ pageX: x, pageY: y }) => {
    setMousePosition({ x, y });
  }, []);

  useEventListener(document, 'mousemove', onMouseTracking);

  // useEffect(() => {
  //   const handleMove = ({ pageX: x, pageY: y }) => {
  //     setMousePosition({ x, y });
  //   };

  //   document.addEventListener('mousemove', handleMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMove);
  //   };
  // }, []);

  return (
    <div className={S.component}>
      <output>
        {x} <span>/</span> {y}
      </output>
    </div>
  );
}

export default PrintMousePosition;
