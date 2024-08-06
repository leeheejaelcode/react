import Avatar from '@/components/Avatar';
import { avatarsData } from '@/data/avatars';
import { useState } from 'react';
// 학습 내용 정리
// [x] 1. 데이터 분리
// [x] 2. 컴포넌트 상태로 정의(선언)
// [x] 3. 이벤트 핸들러 작성 (기능 구현)
// [x] 4. 사용자 상호작용에 따라 화면 업데이트 (확인)
// [-] 5. 컴포넌트 테스트 (아직 안배움..)

function AvatarListPage() {
  // 컴포넌트 상태 선언
  const [list, setList] = useState(avatarsData);

  const handleDeleteItem = (deleteid) => () => {
    console.log('delete', deleteid);
    // 다음 렌더링에서 화면에 표시할 상태 데이터
    const nextList = list.filter((item) => item.id !== deleteid);

    setList(nextList);
  };

  if (list.length === 0) {
    return (
      <p style={{ fontSize: 32, fontWeight: 'bold' }}>
        화면에 표시할 아바타가 없습니다. 😊
      </p>
    );
  }

  return (
    <ul className="AvatarList">
      {list.map((item) => (
        <li key={item.id}>
          <Avatar name={item.name} photo={item.photo} status={item.status} />
          <button
            type="button"
            onClick={handleDeleteItem(item.id)}
            style={{ marginBlockStart: 8 }}
          >
            삭 제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
