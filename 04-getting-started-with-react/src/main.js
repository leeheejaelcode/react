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

const root = ReactDOM.createRoot(container);
root.render(parent);

// 리액트 앱 렌더링
