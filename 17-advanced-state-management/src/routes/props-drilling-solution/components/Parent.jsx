import { object } from 'prop-types';
import S from './style.module.css';
import Child from './Child';

Parent.propTypes = {
  data: object,
};

function Parent() {
  return (
    <div className={S.box}>
      <strong className={S.label}>Parent</strong>
      <Child />
    </div>
  );
}

export default Parent;
