// --------------------------------------------------------------------------
// ✅ 스크롤 애니메이션
// --------------------------------------------------------------------------
// - [ ] 대상 요소의 스크롤 위치에 따라 프로그래스바 scaleX 값이 애니메이션 되도록 설정합니다.
// - [ ] 대상 요소의 스크롤 위치에 따라 아웃풋 텍스트 콘텐츠 값이 %로 출력되도록 설정합니다.
// --------------------------------------------------------------------------

import { oneOf, string } from 'prop-types';
import S from './Progress.module.css';
import { scroll, animate } from 'motion';
import { useRef } from 'react';

ProgressBar.propTypes = {
  containerSelector: string,
  axis: oneOf(['x', 'y']),
};

function ProgressBar({ containerSelector = null, axis = 'y' }) {
  const progressBarRef = useRef(null);
  const outputRef = useRef(null);

  // console.log(containerSelector, axis);
  const setProgressBar = () => {
    const container = document.querySelector(containerSelector);
    const scrollOptions = {
      container,
      axis,
    };
    // 스크롤 애니메이션
    // API 1
    // scroll(animate(progressBarRef.current, { scaleX: 1 }));
    // API 2
    scroll(({ y: { progress } }) => {
      const percentValue = (progress * 100).toFixed(0) + '%';
      animate(progressBarRef.current, { scaleX: progress });
      outputRef.current.value = percentValue;
    }, scrollOptions);
  };

  return (
    <div ref={setProgressBar}>
      <div className={S.progress} ref={progressBarRef} />
      <output className={S.output} ref={outputRef}>
        0%
      </output>
    </div>
  );
}

export default ProgressBar;
