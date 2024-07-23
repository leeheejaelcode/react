// STEP 1. Vanilla Script (ES + DOM API)
// STEP 2. Class Programming
// STEP 3. Web Components API

// TODO : .list 요소 찾기

const list = document.querySelector(".list");

// TODO : 드래깅 상태 제어를 위한 상수 선언
const DRAGGING_CLASSNAME = "dragging";
// console.log(list);

// TODO : .list 자식들 찾기

// let listItems = list.querySelectorAll("li"); // NodeList
// listItems = Array.from(listItems); // NodeList => Array

const listItems = Array.from(list.querySelectorAll("li"));

// TODO : .listItems 집한 순환 드래그 가능하게 처리
listItems.forEach((item) => {
  item.setAttribute("draggable", true);

  // TODO : 각 리스트 아이템을 드래그 시작, 끝 이벤트 연결
  item.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener("dragend", (e) => {
    // 불투명하게 초기화
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });
});
