const ACTION_TYPE = {
  ADD: '추가',
  EDIT: '수정',
  DELETE: '삭제',
  FILTER: '필터링',
  RESET: '초기화',
};

const { ADD, EDIT, DELETE, FILTER, RESET } = ACTION_TYPE;

export const addItem = (newItem) => ({
  type: ADD,
  payload: newItem,
});
export const editItem = (editId, nextItem) => ({
  type: EDIT,
  payload: { editId, nextItem },
});
export const deleteItem = (deleteId) => ({
  type: DELETE,
  payload: { deleteId },
});
export const filterList = (filterKey) => ({
  type: FILTER,
  payload: { filterKey },
});
export const resetList = () => ({
  type: RESET,
});

const generateItem = () => crypto.randomUUID().split('-').at(0);

export const INITIAL_LIST = Array(5)
  .fill(null)
  .map(() => generateItem());

export const listReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD: {
      const nextState = [...state, payload];
      return nextState;
    }
    case EDIT: {
      const { editId, nextItem } = payload;
      const nextState = state.map((item, index) => {
        return index !== editId ? item : nextItem;
      });
      return nextState;
    }
    case DELETE: {
      const { deleteId } = payload;
      const nextState = state.filter((_, index) => index !== deleteId);
      return nextState;
    }
    case FILTER: {
      const filterKey = payload.filterKey.toString();
      const nextState = state.filter((item) => item.includes(filterKey));
      return nextState;
    }
    case RESET: {
      return [...INITIAL_LIST];
    }
    default:
      console.log('기본 값');
      return state;
  }
};
