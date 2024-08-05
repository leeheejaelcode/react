// --------------------------------------------------------------------------
// ✅ ExpandableText 컴포넌트
// --------------------------------------------------------------------------
// - [ ] `text` 속성(prop) 길이에 따라 확장 가능한 텍스트 렌더링
// - [ ] `limit` 속성(기본 값: 255) 값보다 `text` 길이가 짧은 경우 텍스트만 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 텍스트 말줄임(...) 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 확장 or 축소 버튼 표시
// - [ ] 확장 or 축소 버튼을 사용자가 클릭하면 텍스트 확장 또는 축소되어 표시
// --------------------------------------------------------------------------
import { string, number } from 'prop-types';
import './ExpandableText.css';
import { useState } from 'react';
ExpandableText.propTypes = {
  children: string.isRequired,
  limit: number,
};

function ExpandableText({ children, limit = 250 }) {
  const [isExpand, setIsExpand] = useState(false);

  // 파생된 상태
  const isExpandable = children.length > limit;
  let rednerText = children;
  if (isExpandable) {
    rednerText = children.slice(0, limit) + '...';
  }

  const buttonLabel = isExpandable ? '확장' : '축소';

  const handleExpand = () => {
    // 상태 업데이트
    const nextExpandValue = !isExpand;
    console.log('상태 업데이트');
    setIsExpand(!nextExpandValue);
  };

  return (
    <div className="ExpandableText">
      <p>{isExpand ? children : rednerText}</p>
      {isExpandable && (
        <button type="button" onClick={handleExpand}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
