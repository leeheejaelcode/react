import { Link } from 'react-router-dom';

export default function NoteList() {
  return (
    <main>
      <h1>노트 목록 페이지</h1>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/notes/new">노트 생성 페이지</Link>
        </li>
        <li>
          <Link to="/notes/detail">노트1</Link>
        </li>
        <li>
          <Link to="/notes/detail">노트2</Link>
        </li>
      </ul>
    </main>
  );
}
