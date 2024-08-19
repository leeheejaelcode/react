import S from './PrintMousePosition.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useMousePosition from '@/hooks/useMousePosition';

function PrintMousePosition() {
  const documentTitle = '마우스 위치 추적 ⬅️ 이펙트 동기화 & 정리';
  useDocumentTitle(documentTitle);

  const { x, y } = useMousePosition();

  return (
    <div className={S.component}>
      <output>
        {x} <span>/</span> {y}
      </output>
    </div>
  );
}

export default PrintMousePosition;
