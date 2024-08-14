import ChatWindow from './components/ChatWindow';
import S from './style.module.css';
import { useState, useRef, useImperativeHandle } from 'react';

const INITIAL_CHAT_MESSAGES = [
  { id: 'chat-1', message: '오늘 저녁에 뭐 먹을까?', isMe: false },
  { id: 'chat-2', message: '오늘? 저녁에? 뭐 먹지?', isMe: true },
  { id: 'chat-3', message: '치킨 먹을까? 🐓 🍗 어때?', isMe: false },
  { id: 'chat-4', message: '치킨? 뭐 매일 치킨이야? 난 싫어.', isMe: true },
  { id: 'chat-5', message: '그럼 짜장에 탕수육 어때?', isMe: false },
  {
    id: 'chat-6',
    message: '별로... 하아 좀 맛있는 거 없나? 그냥 회 먹자. 알았지?',
    isMe: true,
  },
  { id: 'chat-7', message: '음.... 그래. 알았어.', isMe: false },
  {
    id: 'chat-8',
    message: '좋아! 좀 있다 사가정역 2번 출구에서 만나~ 😃 ',
    isMe: true,
  },
];
function UsingImperativeHandle() {
  // 채팅 메시지 목록 데이터
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT_MESSAGES);
  // 하위 컴포넌트 내부 돔 엘리먼트 참조 객체
  const imperativeHandleRef = useRef(null);
  const handleAdMessage = (message) => {
    const newMessage = {
      id: `chat-${chatMessages.length + 1}`,
      message,
      isMe: true,
    };
    setChatMessages((messages) => [...messages, newMessage]);
  };

  const mountedMainElement = () => {
    const imperativeHandle = imperativeHandleRef.current;
    imperativeHandle?.scrollDownList?.();
    // const ol = chatListRef.current;
    // setTimeout(() => ol.scrollTo(0, ol.scrollHeight));
  };

  return (
    <main className={S.component} ref={mountedMainElement}>
      <h1 className={S.headline} lang="en">
        상위 컴포넌트에 명령형 핸들 노출하기
      </h1>
      <div className={S.description}>
        <p>
          <a
            href="https://ko.react.dev/reference/react/forwardRef"
            rel="noreferrer noopener"
            target="_blank"
          >
            React.forwardRef()
          </a>
          를 사용해 상위 컴포넌트에 하위 컴포넌트의 DOM 요소 노드를 노출하는
          방법을 학습했습니다.
        </p>
        <p>
          때때로 DOM 요소 노드에 대한 접근을 허용하지 않고, 명령형 핸들(함수)를
          노출하고 싶을 수도 있습니다.
        </p>
        <p>
          이런 경우{' '}
          <a
            href="https://ko.react.dev/reference/react/useImperativeHandle"
            rel="noreferrer noopener"
            target="_blank"
          >
            React.useImperativeHandle()
          </a>{' '}
          훅을 사용합니다. 이 훅을 사용하는 방법을 학습합니다.
        </p>
      </div>
      <ChatWindow
        $$ref={imperativeHandleRef}
        messages={chatMessages}
        onAddMessage={handleAdMessage}
      />
    </main>
  );
}

export default UsingImperativeHandle;
