/* eslint-disable no-unused-vars */
import {
  addItem,
  editItem,
  listReducer,
  deleteItem,
  filterList,
  resetList,
  INITIAL_LIST,
} from '@/stores/list';
import { useReducer } from 'react';

export function ListManager() {
  const [list, dispatch] = useReducer(listReducer, INITIAL_LIST);

  // 추가
  const handleAddItem = () => {
    dispatch(addItem(crypto.randomUUID().split('-').at(0)));
  };
  // 수정
  const handleEditItem = (editId) => () => {
    dispatch(editItem(editId, crypto.randomUUID().split('-').at(0)));
  };
  // 삭제
  const handleDeleteItem = (deleteId) => () => {
    dispatch(deleteItem(deleteId));
  };

  // 필터링
  const handleFilterItems = () =>
    dispatch(filterList(Math.floor(Math.random() * 10)));

  const handleResetItems = () => dispatch(resetList());
  return (
    <div>
      <h2 className="headline2">배열관리자</h2>
      <div role="group">
        <button type="button" onClick={handleAddItem}>
          추가
        </button>
        <button type="button" onClick={handleFilterItems}>
          필터링
        </button>
        <button type="button" onClick={handleResetItems}>
          초기화
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button type="button" onClick={handleEditItem(index)}>
              수정
            </button>{' '}
            <button type="button" onClick={handleDeleteItem(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
