// 실습
import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

// data
const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
  ],
};

const listItems = listData.items.map(({ id, title }) => {
  // 가상 요소 반환
  const itemElement = createElement(
    "li",
    { className: "item" },
    createElement("img", {
      src: `/architectures/architecture-${id}.jpg`,
      alt: "",
    }),
    createElement("span", { className: "content" }, title),
    createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

console.log(listData);

// <ul class="architectures" lang="en"><ul>
const list = createElement(
  // type
  "ul",
  // props
  { className: "architectures", lang: "en" },
  // children
  // <li class="item"></li>
  createElement(
    "li",
    { className: "item" },
    // <img src="/architectures/architecture-1.jpg" alt=""></img>
    // <span class="content">Climatology</span>

    createElement("img", { src: "/architectures/architecture-1.jpg", alt: "" }),
    createElement("span", { className: "content" }, "Climatology"),
    createElement(
      "button",
      { type: "button", title: "아이템 이동(위/아래 화살표 키 활용)" },
      createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동(위/아래 화살표 키 활용)",
      })
    )
  )
);

// 가상 DOM (실제 DOM 흉내: 단순화)

const root = createRoot(document.getElementById("actual-dom"));
root.render(list);
