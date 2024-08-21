import { object } from 'prop-types';
import S from './style.module.css';
import GrandChild from './GrandChild';

Child.propTypes = {
  data: object,
};

function Child() {
  return (
    <div className={S.box}>
      <strong className={S.label}>Child</strong>
      <GrandChild />
    </div>
  );
}

export default Child;
