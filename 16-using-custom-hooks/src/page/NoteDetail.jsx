import { Link } from 'react-router-dom';

export default function NewNote() {
  return (
    <main>
      <h1>노트 디테일 페이지</h1>
      <p>
        <Link to="/notes">노트 리스트</Link>
      </p>
    </main>
  );
}
