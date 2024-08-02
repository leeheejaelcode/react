// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [ ] 데이터 분리
// - [ ] 리스트 렌더링
// - [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------
import { arrayOf } from 'prop-types';
import Avatar from '@/components/Avatar';
import { UserType } from '@/@types/globals.d';

AvatarListPage.propTypes = {
  list: arrayOf(UserType).isRequired,
};

function AvatarListPage({ list }) {
  return (
    <ul className="AvatarList">
      {list.map((user) => (
        <li key={user.id}>
          <Avatar user={user} />
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
