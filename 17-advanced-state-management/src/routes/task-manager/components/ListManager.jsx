/* eslint-disable no-unused-vars */
import { listReducer } from '@/stores/list';
import { useReducer } from 'react';

export function ListManager() {
  const [list] = useReducer(listReducer, ['one', 'zero']);

  // 추가
  const handleAddItem = () => {};

  // 수정
  const handleEditItem = () => {};

  // 삭제
  const handleRemoveItem = () => {};

  // 필터링
  const handleFilterItems = () => {};

  return (
    <div>
      <h2 className="headline2">배열관리자</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
