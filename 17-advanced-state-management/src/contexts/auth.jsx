import authReducer, {
  INITIAL_AUTH_INFO,
  resetAuth,
  setAuth,
} from '@/stores/login';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';

const authContext = createContext();

export const AuthProvider = (props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_AUTH_INFO);

  const handleSetAuth = useCallback(
    (authInfo) => dispatch(setAuth(authInfo)),
    []
  );
  const handleResetAuth = useCallback(() => dispatch(resetAuth()), []);

  const authInfo = useMemo(() => authState, [authState]);

  return (
    <authContext.Provider
      value={{
        authInfo,
        setAuth: handleSetAuth,
        resetAuth: handleResetAuth,
      }}
      {...props}
    />
  );
};

export const useAuth = () => {
  const authContextValue = useContext(authContext);

  if (!authContext) {
    throw new Error('useAuth() 훅은 AuthContext의 내부에서만 사용 가능합니다.');
  }

  return authContextValue;
};
