import AvatarListPage from '@/pages/AvatarListPage';
import avatarsData from '@/data/avatars';

// 리액트 컴포넌트 함수는 순수해야 한다.
// 순수한 지, 안한 지 어떻게 확인할까?
// 개발 중일 때만 2번 실행해서 일반적인 문제 진단
// 배포 되었을 때는 1번만 실행
// Strict Mode는 <StrictMode> 컴포넌트 내부의 모든 컴포넌트 트리에 대해 추가적인 개발 전용 검사를 활성화합니다.
let tryCount = 0;
function App() {
  console.log(++tryCount, { avatarsData });
  return (
    <div className="App">
      <AvatarListPage list={avatarsData} />
    </div>
  );
}

export default App;

// StrictMode를 사용하면 2번씩 실행 되는 이유
// 순수 함수인지 아닌지 체크하기 위해
// [1] mount -> unmount -> [2] mount
