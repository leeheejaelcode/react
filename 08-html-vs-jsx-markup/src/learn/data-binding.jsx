import { randomNumber } from '../utils/index.js';

function DataBinding({ statusMessages }) {
  // data (props)
  // random logic

  const statusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];
  // JSX (generate markup)
  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

export default DataBinding;
