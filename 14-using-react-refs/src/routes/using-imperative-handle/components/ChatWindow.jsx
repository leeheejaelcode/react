import { useId, useRef, useImperativeHandle } from 'react';
import S from './ChatWindow.module.css';
import { arrayOf, bool, exact, string, func, any } from 'prop-types';

// ---------------------------------------------------------------------------
// ✅ 컴포넌트 내부에 명령형 핸들이 없을 경우 문제 해결
// ---------------------------------------------------------------------------
// - [x] 컴포넌트 DOM 엘리먼트 참조를 외부에 노출: forwardRef() / React v19 ($$ref prop)
// - [ ] 컴포넌트 DOM 엘리먼트를 제어할 수 있는 명령형 핸들 외부에 노출: useImperativeHandle()
// ---------------------------------------------------------------------------

const MessageType = exact({
  id: string.isRequired,
  message: string.isRequired,
  isMe: bool.isRequired,
});

const MessageListType = arrayOf(MessageType);

ChatWindow.propTypes = {
  messages: MessageListType.isRequired,
  onAddMessage: func.isRequired,
  $$ref: exact({
    current: any,
  }),
};

function ChatWindow({ messages, onAddMessage, $$ref }) {
  const id = useId();
  const textareaRef = useRef(null);
  const olRef = useRef(null);
  useImperativeHandle($$ref, () => {
    // 명령형 핸들을 생성
    const scrollDownList = () => {
      const ol = olRef.current;
      setTimeout(() => ol.scrollTo(0, ol.scrollHeight));
    };
    // 생성한 명령형 핸들을 상위 컴포넌트에 노출(공개)
    return {
      scrollDownList,
    };
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    let newMessage = formData.get('message');
    newMessage = newMessage.trim();

    sendMessage(newMessage);
  };

  const sendMessage = (newMessage) => {
    const textarea = textareaRef.current;
    // const ol = olRef.current;

    if (newMessage.length <= 0) {
      alert('메시지 내용을 입력하세요!');
      textarea.select();
      return;
    }

    onAddMessage?.(newMessage);
    textarea.value = '';

    // 타이머
    // setTimeout(() => {
    //   ol.scrollTo(0, ol.scrollHeight);
    // }, 400);
    // scrollDownList(ol);
  };

  const handleKeyDown = (e) => {
    const { key, shiftKey } = e;
    if (key == 'Enter' && !shiftKey) {
      e.preventDefault();
      const newMessage = e.currentTarget.value.trim();
      if (newMessage.length > 0) {
        sendMessage(newMessage);
      }
    }
    if (key == 'Enter' && shiftKey) {
      console.log('shift+enter');
    }
  };

  // const mountedList = (el) => {
  //   olRef.current = el;
  //   // scrollDownList(el);
  // };

  return (
    <section className={S.component}>
      <h2 className="sr-only">채팅 화면</h2>

      <ol
        //
        //ref={mountedList}
        ref={olRef}
        className={S.chats}
      >
        {messages.map(({ id, isMe, message }) => {
          const classNames = `${S.chat} ${isMe ? S.me : ''}`.trim();

          return (
            <li key={id} className={classNames}>
              {message}
            </li>
          );
        })}
      </ol>

      <form className={S.form} onSubmit={handleSendMessage}>
        <div className={S.messageBox}>
          <label htmlFor={id} className="sr-only">
            메시지 입력
          </label>
          <textarea
            ref={textareaRef}
            id={id}
            name="message"
            onKeyDown={handleKeyDown}
          />
        </div>
        <button type="submit">보내기</button>
      </form>
    </section>
  );
}

export default ChatWindow;
