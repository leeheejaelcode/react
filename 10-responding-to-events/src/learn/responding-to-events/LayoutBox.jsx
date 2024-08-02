import { node, func } from 'prop-types';
// PropTypes.node
// 리액트 컴포넌트가 반환할 수 있는 모든 타입
LayoutBox.propTypes = {
  children: node, // [TS]React.ReactNode
  onClick: func,
};

function LayoutBox({ children, onClick, ...restProps }) {
  console.log(children);
  // {style={--color: 'var(--cyan)'} onClick={(e) => {console.log("cyan", e.target)}}
  // {style={--color: 'var(--magenta)'} onClick={(e) => {console.log("magenta", e.target)}}
  // {style={--color: 'var(--yellow)'} onClick={(e) => {console.log("yellow", e.target)}}

  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.(e);
  };
  return (
    <div className="box" {...restProps} onClick={handleClick}>
      {children}
    </div>
  );
}

export default LayoutBox;
