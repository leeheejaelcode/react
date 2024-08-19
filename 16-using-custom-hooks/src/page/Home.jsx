import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>싱글 페이지 애플리케이션의 홈페이지 입니다.</p>
      {/* <Link to={'/note-list'}>노트 목록 페이지</Link> <br /> */}
      {/* <Link to={{pathname: "/note-list"}}>노트 목록 페이지</Link> <br /> */}
      <Link to="/notes">노트 목록 페이지</Link> <br />
    </div>
  );
}
