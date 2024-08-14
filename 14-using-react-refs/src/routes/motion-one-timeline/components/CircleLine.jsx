// import { forwardRef } from 'react';
import S from './CircleLine.module.css';
import { any, exact, number, string } from 'prop-types';

CircleLine.propTypes = {
  strokeColor: string,
  strokeWidth: number,
  forwardRef: exact({
    current: any,
  }),
};

function CircleLine({
  strokeColor = '#D85555 ',
  strokeWidth = 4,
  forwardRef = { current: null },
}) {
  return (
    <svg
      className={S.component}
      width={163}
      height={50}
      viewBox="0 0 163 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // ref={svgRef}
      ref={forwardRef}
    >
      <circle
        cx={25}
        cy={25}
        r={23}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        pathLength={1}
      />
      <circle
        cx={138}
        cy={25}
        r={23}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        pathLength={1}
        style={{ transform: 'rotateX(180deg)' }}
      />
      <line
        x1={47}
        y1={25}
        x2={115}
        y2={25}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        pathLength={1}
      />
    </svg>
  );
}
// export default forwardRef(CircleLine);
export default CircleLine;
