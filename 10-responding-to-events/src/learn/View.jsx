import Headline from './Headline';
import JSX_Markup from './html-vs-jsx-markup/jsx-markup';
import EventHandlerProp from './responding-to-events/event-handler-prop';
import EventPropagation from './responding-to-events/event-propagation';
import EventWithSideEffects from './responding-to-events/event-with-side-effects';

function RespondingToEvents() {
  let message = '김사부! 집중!';
  // const printMessage = () => console.log(message);

  // message를 하위컴포넌트에서 변경 가능한 이유는 클로저이기때문에
  // 함수를 참조하기 때문이다
  const updateMessage = (addMessage) => {
    message += addMessage;
    console.log(message);
  };
  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트에 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />
      <form
        action="/?submitted"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <input
          type="text"
          aria-label="사용자 이름"
          placeholder="이름을 입력해 주세요"
        />
        <button type="submit">보내기</button>
      </form>
      <hr />
      <EventHandlerProp message={message} onPrintMessage={updateMessage} />
      <hr />
      <EventPropagation />
      <hr />
      <EventWithSideEffects />
    </div>
  );
}

function HTMLvsJSX() {
  return (
    <div className="ViewHTMLvsJSX" hidden>
      <Headline />
      <hr />
      <JSX_Markup />
    </div>
  );
}

// --------------------------------------------------------------------------

function View() {}

View.HTMLvsJSX = HTMLvsJSX;
View.RespondingToEvents = RespondingToEvents;

export default View;
