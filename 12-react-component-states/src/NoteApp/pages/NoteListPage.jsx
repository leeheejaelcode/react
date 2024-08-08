import { useState } from 'react';
import { getNoteList } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';
import { func } from 'prop-types';
import { ROUTES } from '@/NoteApp/constants/routes';

NoteListPage.propTypes = {
  onChangeRoute: func.isRequired,
};

function NoteListPage({ onChangeRoute }) {
  // 화면에 표시할 노트의 목록 상태
  // 이렇게 사용을 하게 되면 매번 랜더링 될때마다 안에 코드가 실행되기 때문에
  // 캐싱비용이 많이 들어서 효율적이지 못하다
  // const [list] = useState(getNoteList());

  const [list] = useState(() => getNoteList());

  const handleClick = (e) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create);
  };

  return (
    <div className="NoteListPage">
      <NoteList list={list} />
      <a onClick={handleClick} className="createNoteLink" href="#create-note">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
