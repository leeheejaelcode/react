// 개발자가 선언된 데이터 관리
const listData = {
  items: [
    // { id: "1", title: "Climatology" },
    // { id: "2", title: "History of Architecture" },
    // { id: "3", title: "Graphics" },
    // { id: "4", title: "Building design" },
  ],
};

// React Element (== 가상 DOM 요소 노드) 요소 생성
// React.isValidElement API
// console.log(React.isValidElement(list)); // true

// ReactDOM.createRoot를 활용하여 리액트 앱 렌더링
const container = document.getElementById("root");

const reactDomRoot = ReactDOM.createRoot(container);
// root.render(parent);

// 렌더링을 처리하는 함수

function render() {
  const children = listData.items.map(({ id, title }) => {
    const child = React.createElement(
      "li",
      {
        className: "item",
        key: id,
      },
      React.createElement("img", {
        src: `/architectures/architecture-${id}.jpg`,
        alt: "",
      }),
      React.createElement(
        "span",
        {
          className: "content",
        },
        `${title}`
      ),
      React.createElement(
        "button",
        {
          type: "button",
          title: "아이템 이동 (위/아래 화살표 키 활용)",
        },
        React.createElement("img", {
          src: "/icons/handle.svg",
          alt: "아이템 이동 (위/아래 화살표 키 활용)",
        })
      )
    );
    return child;
  });

  const parent = React.createElement(
    "ul",
    {
      className: "architectures",
      lang: "en",
    },
    ...children
  );

  reactDomRoot.render(parent);
}

function unmount() {
  reactDomRoot.unmount();
}

// 최초 마운트 시 실행(최초 렌더링)
render();

// 타이머 웹 API
// setTimeout

// 특정 시간이 지나면 앱을 렌더링
// setTimeout(render, 2000);

// 특정 시간이 지나면 앱을 렌더링 해제
// setTimeout(() => {
//   unmount();
// }, 4000);

// 반응성(Reactivity)
// 개발자 -> 데이터 수정 -> 반응성(변경 감지) -> 리액트 -> 화면 업데이트 구현
const reactiveListData = new Proxy(listData, {
  // get 읽기 (원본 수정 대신, 프록시를 사용해 가로채서 읽기)
  get(target, prop) {
    console.log("[GET]");

    // 객체의 속성 반환
    return target[prop];
  },
  // set 쓰기 (원본 수정 대신, 프록시를 사용해 가로채서 쓰기)
  set(target, prop, newValue) {
    // 이전 값의 접근
    const oldValue = target[prop];

    // 새로운 값으로 업데이트 로직 작성
    target[prop] = newValue;
    console.log("[SET] update", JSON.stringify(newValue));
    // 리액트로 하여금 반응(수정 감지)되면 화면을 다시 그려라
    render();
    return true;
  },
});

// TODO:
// 1초 마다 반응성 데이터에 새로운 아이템 추가 (업데이트)
setTimeout(() => {
  console.log("1초 지남");
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 1,
      title: "Climatology",
    },
  ];
}, 1000);
setTimeout(() => {
  console.log("2초 지남");
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 2,
      title: "History of Architecture",
    },
  ];
}, 2000);
setTimeout(() => {
  console.log("1초 지남");
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 3,
      title: "Graphics",
    },
  ];
}, 3000);
setTimeout(() => {
  console.log("4초 지남");
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 4,
      title: "Building design",
    },
  ];
}, 4000);
