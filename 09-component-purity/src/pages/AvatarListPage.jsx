// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [ ] 데이터 분리
// - [ ] 리스트 렌더링
// - [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------

import Avatar from '@/components/Avatar';

let data = [
  { name: '야무', photo: 'man-02.jpg', status: 'online' },
  { name: '범쌤', photo: 'man-04.jpg', status: 'away' },
  { name: '주원', photo: 'woman-04.jpg', status: 'dont-disturb' },
  { name: '정민', photo: 'woman-01.jpg' },
];

function AvatarListPage() {
  return (
    <ul className="AvatarList">
      {data.map(({ name, photo, status }) => (
        <li key={name}>
          <Avatar name={name} photo={photo} status={status} />
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
