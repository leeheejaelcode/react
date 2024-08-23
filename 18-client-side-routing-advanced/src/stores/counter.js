import { create } from 'zustand';

// Zustand로 상태 관리 (Zustand <- Redux 계승 / Jotai <- Recoil(atom))
// - [React Project] create() 스토어를 관리하는 훅 함수 생성
// - [Vanilla Project] createStore() 스토어를 관리하는 객체를 생성

const INITIAL_VALUE = 0;

// 상태를 생성하는 함수
const stateCreator = (set) => ({
  count: INITIAL_VALUE,
  increment: (by = 1) => set((s) => ({ count: s.count + by })),
  decrement: (by = 1) => set(({ count }) => ({ count: count - by })),
  reset: () => set({ count: INITIAL_VALUE }),
});

// 카운터 상태를 관리하는 훅 함수 이름 작성
export const useCounter = create(stateCreator);
