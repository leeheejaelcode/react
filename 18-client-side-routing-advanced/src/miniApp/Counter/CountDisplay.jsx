import { memo } from 'react';
import S from './style.module.css';
import { useCountStore } from './@store';

function CountOutput() {
  const count = useCountStore((s) => s.count);
  return <output className={S.output}>{count}</output>;
}

export default memo(CountOutput);
