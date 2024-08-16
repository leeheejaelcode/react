import { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import axios from 'axios';
import { string, exact } from 'prop-types';
import S from './DataFetching.module.css';

// eslint-disable-next-line no-unused-vars
const ENDPOINT =
  'https://yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  const [state, setState] = useImmer({
    keyPoint: '상태가 복잡해지면 관리도 덩달아 어려워진다',
    stateData: {
      one: {
        isLoading: false,
        error: null,
        data: null,
      },
    },
    two: {
      three: {
        four: {
          five: 'depp state object',
        },
      },
    },
  });
  useEffect(() => {
    // useImmer 관리 코드
    setState((draft) => {
      draft.stateData.one.isLoading = 'true';
    });
    const abortController = new AbortController();
    // useState 관리 코드
    // setState((prevState) => ({
    //   ...prevState,
    //   isLoading: true,
    // }));
    const fetchOliveOli = async () => {
      try {
        const response = await axios.get(ENDPOINT, {
          signal: abortController.signal,
        });
        // useImmer 관리 코드
        setState((draft) => {
          draft.stateData.one.isLoading = false;
          draft.stateData.one.data = response.data;
        });
        // useState 관리 코드
        // setState((prevState) => ({
        //   ...prevState,
        //   data: response.data,
        //   isLoading: true,
        // }));
      } catch (error) {
        if (error.name !== 'CanceledError') {
          // useImmer 관리 코드
          setState((draft) => {
            draft.stateData.one.isLoading = false;
            draft.stateData.one.error = error;
          });
          // useState 관리 코드
          // setState((prevState) => ({
          //   ...prevState,
          //   error,
          //   isLoading: false,
          // }));
        }
      }
    };

    fetchOliveOli();
    return () => {
      abortController.abort();
    };
  }, []);

  if (state.stateData.one.isLoading) {
    return <Loading />;
  }
  if (state.stateData.one.error) {
    return <Error error={state.stateData.one.error} />;
  }

  return (
    <div className={S.component}>
      <ul>
        {state.stateData.one.data?.items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default DataFetching;

function Loading() {
  return <p>데이터 로딩 중입니다.</p>;
}

Error.propTypes = {
  error: exact({
    message: string.isRequired,
  }).isRequired,
};
function Error({ state }) {
  return (
    <p role="alert">
      오류 발생!{' '}
      <span style={{ color: 'red' }}>{state.stateData.one.error}</span>
    </p>
  );
}
