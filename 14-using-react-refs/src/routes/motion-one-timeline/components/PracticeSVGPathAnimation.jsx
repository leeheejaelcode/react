// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [x] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [x] 드로잉 시, 고려할 점
//   - [x] Stroke 속성으로 그립니다.
// - [x] 애니메이션을 적용하기 위해 고려할 점
//   - [x] strokeDasharray
//   - [x] strokeDashoffset
//   - [x] visibility
//   - [x] pathLength
// --------------------------------------------------------------------------
import S from './PracticeSVGPathAnimation.module.css';
import { timeline } from 'motion';
import { useRef } from 'react';
import CircleLine from './CircleLine';

function PracticeSVGPathAnimation() {
  const svgRef = useRef(null);

  const handleTimelineAnimate = async () => {
    const { current: el } = svgRef;

    const [circle1, circle2] = Array.from(el.querySelectorAll('circle'));
    const line = el.querySelector('line');

    if (!circle1 || !circle2 || !line)
      throw new Error('SVG 내부에 <circle>, <line>을 찾을수가 없습니다.');

    const commonProps = { visibility: 'visible' };

    const sequence = [
      [
        circle1,
        { strokeDashoffset: [1, 0], ...commonProps },
        { duration: 1, easing: 'ease-in-out' },
      ],
      [
        line,
        { strokeDashoffset: [1, 0], ...commonProps },
        { duration: 0.25, at: '-0.2' },
      ],
      [
        circle2,
        { strokeDashoffset: [1, 0], ...commonProps },
        { duration: 1, easing: 'ease-in-out' },
      ],
    ];

    const options = {
      repeat: 2,
    };

    timeline(sequence, options);

    const animationControls = timeline(sequence, options);

    await animationControls.finished;
    Array.from(el.children).forEach(
      (child) => (child.style.visibility = 'hidden')
    );
  };

  return (
    <>
      <button
        className={S.button}
        type="button"
        onClick={handleTimelineAnimate}
      >
        <abbr title="Scalable Vector Graphic">SVG</abbr>패스 애니메이션
      </button>
      <div className={S.component}>
        {/* <svg width={210} height={41} viewBox="0 0 210 41" fill="none">
          <circle
            cx="20.5"
            cy="20.5"
            r="17.5"
            stroke={color}
            strokeDasharray={1}
            strokeDashoffset={0}
            strokeWidth={6}
            pathLength={1}
            ref={svgCircleRef1}
          />
          <line
            x1={35}
            y1={20}
            x2={173}
            y2={20}
            stroke={color}
            strokeDasharray={1}
            strokeDashoffset={0}
            strokeWidth={6}
            pathLength={1}
            ref={svgLineRef}
          />
          <circle
            cx="189.5"
            cy="20.5"
            r="17.5"
            stroke={color}
            strokeDasharray={1}
            strokeDashoffset={0}
            strokeWidth={6}
            pathLength={1}
            ref={svgCircleRef2}
          />
        </svg> */}
        <CircleLine ref={svgRef} />
      </div>
    </>
  );
}

export default PracticeSVGPathAnimation;
