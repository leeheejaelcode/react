import { memo } from 'react';
import { node, oneOf } from 'prop-types';
import S from './style.module.css';
import { useCountStore } from './@store';

CountButton.propTypes = {
  children: node,
  type: oneOf(['+', '-']),
};

function CountButton({ children, type = '+', ...restProps }) {
  // selector 함수 사용하지 않은 예 (리랜더 유발)
  // const { increment, decrement } = useCountStore();
  // let handler = increment;
  // if (type === '-') handler = decrement;

  // selector 함수 사용한 예 (리랜더 없음)
  const handler = useCountStore((s) =>
    type === '+' ? s.increment : s.decrement
  );

  return (
    <button type="button" className={S.button} onClick={handler} {...restProps}>
      {children}
    </button>
  );
}

export default memo(CountButton);
