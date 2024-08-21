import { object } from 'prop-types';
import S from './style.module.css';
import Parent from './Parent';

GrandParent.propTypes = {
  data: object,
};

function GrandParent() {
  return (
    <div className={S.box}>
      <strong className={S.label}>Grand Parent</strong>
      <Parent />
    </div>
  );
}

export default GrandParent;
