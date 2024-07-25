// const children = [];

const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

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

// React Element (== 가상 DOM 요소 노드) 요소 생성
// React.isValidElement API
// console.log(React.isValidElement(list)); // true

// ReactDOM.createRoot를 활용하여 리액트 앱 렌더링
const container = document.getElementById("root");
console.log(container);

const reactDomRoot = ReactDOM.createRoot(container);
// root.render(parent);

// 렌더링을 처리하는 함수

function render() {
  reactDomRoot.render(parent);
}

function unmount() {
  reactDomRoot.unmount();
}

// 타이머 웹 API
// setTimeout

// 특정 시간이 지나면 앱을 렌더링
setTimeout(render, 2000);

// 특정 시간이 지나면 앱을 렌더링 해제
setTimeout(() => {
  unmount();
}, 4000);
