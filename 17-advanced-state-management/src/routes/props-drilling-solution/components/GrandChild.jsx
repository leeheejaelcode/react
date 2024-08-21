import { object } from 'prop-types';
import S from './style.module.css';
import { usePage } from '../context';
// 전달 받은 값을 가져오기

GrandChild.propTypes = {
  data: object,
};

function GrandChild() {
  // 전달 받은 값을 가져오기
  const { message, color } = usePage();
  return (
    <div className={S.box}>
      <strong className={S.label}>Grand Child</strong>
      <p style={{ color }}>{message}</p>
    </div>
  );
}

export default GrandChild;
