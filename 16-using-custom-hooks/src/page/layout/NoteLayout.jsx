import { Outlet, Link } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Link to="new">작성</Link>
      <ul>
        <li>
          <Link to="detail">디테일1</Link>
        </li>
        <li>
          <Link to="detail">디테일2</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default RootLayout;
