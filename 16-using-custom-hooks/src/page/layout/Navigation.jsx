import NavLink from '@/page/NavLink';
import S from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav className={S.component}>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/notes" end>
            노트목록
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes/new">노트생성</NavLink>
        </li>
      </ul>
    </nav>
  );
}
