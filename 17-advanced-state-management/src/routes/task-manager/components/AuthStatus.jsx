import { useReducer } from 'react';

const ACTION_TYPE = {
  SIGN_IN: '로그인',
  SIGN_OUT: '로그아웃',
};

const authReducer = (state, action) => {
  // 액션: 요청서  { type, payload? }
  // 요청을 식별해 기능 수행
  if (action.type === ACTION_TYPE.SIGN_IN) {
    return action.payLoad;
  }
  if (action.type === ACTION_TYPE.SIGN_OUT) {
    return action.payLoad;
  }
  return state;
};

export default function AuthStatus() {
  const [authUser, dispatch] = useReducer(authReducer, null);

  const signIn = () => {
    dispatch({
      type: ACTION_TYPE.SIGN_IN,
      payLoad: { name: '야무', email: 'yamoo9@naver.com' },
    });
  };

  const signOut = () => {
    dispatch({ type: ACTION_TYPE.SIGN_OUT });
  };

  return (
    <div>
      <h2 className="headline2">인증 정보</h2>
      {authUser ? (
        <>
          <p>
            {authUser.name} ({authUser.email})
          </p>
          <button type="button" onClick={signOut}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <p>인증된 사용자가 없습니다.</p>
          <button type="button" onClick={signIn}>
            로그인
          </button>
        </>
      )}
    </div>
  );
}
