import { create } from 'zustand';

const INITIAL_TASKS = [
  {
    id: '374f637e-d27f-4aa3-acb4-a76b76a31d51',
    content: 'Draiange systems',
    isCompleted: false,
    isPin: false,
  },
  {
    id: 'a1ddb5c6-f4aa-4c9c-968d-4c0750e5d705',
    content: 'Reereational faeilities',
    isCompleted: false,
    isPin: false,
  },
];

// 상태를 생성하는 함수
const stateCreator = (set) => ({
  tasks: INITIAL_TASKS,

  addTask: (data) =>
    set(({ tasks }) => {
      console.log(data);
      console.log({ tasks });
      const newTask = {
        id: crypto.randomUUID(),
        content: data,
        isCompleted: false,
        isPin: false,
      };

      // 기존 tasks 배열에 newTask를 추가
      const nextState = [...tasks, newTask];
      // 올바르게 tasks로 반환
      return { tasks: nextState };
    }),
});

// 카운터 상태를 관리하는 훅 함수 이름 작성
export const useTasks = create(stateCreator);

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.DELETE_TASK: {
      const deleteId = action.payload;
      const nextState = state.filter((item) => item.id !== deleteId);
      return nextState;
    }

    case ACTION_TYPES.TOGGLE_PIN: {
      const taskId = action.payload;

      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isPin: !item.isPin };
          return nextTask;
        } else {
          return item;
        }
      });
      return nextState;
    }

    case ACTION_TYPES.SET_TASK: {
      const { taskId, isCompleted } = action.payload;

      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isCompleted };
          return nextTask;
        } else {
          return item;
        }
      });

      return nextState;
    }

    default: {
      return state;
    }
  }
}
