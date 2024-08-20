import { useEffect } from 'react';
import { useState } from 'react';

/**@type {(initialValue:any, callback : (nextState:any)=> void) => [state,setState]} */
export default function useStateWithCallback(initialValue, callback) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const nextState = state;
    callback?.(nextState);
    // callback은 반응성 상태가 아니라는것을 알고 있다
    // 즉 callback이 변경된다고 해서 이펙트 함수가 다시 실행되어서는 안된다.
    // 이 문제가 고질적이므로 React 팀은 v19부터 useEffectEvent() 훅을 제공한다/
    // useEffectEvent() 훅을 사용하면 callback을 반응하지 않는 일반 함수로 취급할 수 있다.
    // ESLint 훅 검사 규칙에 위반하지 않게 된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
}
