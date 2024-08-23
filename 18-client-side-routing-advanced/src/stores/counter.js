import { create } from 'zustand';

// Zustand로 상태 관리 (Zustand <- Redux 계승 / Jotai <- Recoil(atom))
// - [React Project] create() 스토어를 관리하는 훅 함수 생성
// - [Vanilla Project] createStore() 스토어를 관리하는 객체를 생성

// 상태를 생성하는 함수
const stateCreator = (set, get) => {
  // 액션(기능,함수)
  // const increament = () =>{}
  // 관리 상태(객체)
  return {
    count: 0,
  };
};

// 카운터 상태를 관리하는 훅 함수 이름 작성
export const useCounter = create();
