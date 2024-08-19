import { Link } from 'react-router-dom';

export default function NewNote() {
  return (
    <main>
      <h1>노트 생성 페이지</h1>
      <p>
        <Link to="/">홈</Link>
      </p>
    </main>
  );
}
