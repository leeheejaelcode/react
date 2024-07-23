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
  // item.style.cursor = "move";
  // TODO : 각 리스트 아이템을 드래그 시작, 끝 이벤트 연결
  item.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener("dragend", (e) => {
    // 불투명하게 초기화
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });
});
// TODO : list 드래그 이벤트 핸들링
list.addEventListener("dragover", (e) => {
  // 브라우저 기본 작동 중지
  e.preventDefault();
  // TODO : 현재 드래깅 중인 아이템 찾기
  const draggedItem = listItems.find((item) =>
    item.classList.contains(DRAGGING_CLASSNAME)
  );
  // TODO : 드래깅 중인 요소가 아닌 나머지 아이템 집합 찾기
  const restItems = listItems.filter((item) => !Object.is(item, draggedItem));
  // TODO : 나머지 아이템 중에 드레깅 요소가 드레깅 중인 화면 상의 높이가
  // 드롭 대상 요소의 화면에서의 top 위치 + (높이 * 0.5)값  교체할 아이템 찾기

  // 드래깅 중인 요소가 리스트 안에서 움직일 때 화면에서의 높이 값 (이벤트 감지)

  const replaceItem = restItems.find((item, index) => {
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  if (replaceItem) {
    list.insertBefore(draggedItem, replaceItem);
  } else {
    list.appendChild(draggedItem);
  }
});
