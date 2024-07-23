export default class SortableList {
  // 클래스 멤버

  static DRAGGING_CLASSNAME = "dragging";

  // 비공개 필드 멤버
  #list = null;
  #items = [];
  // 생성자
  constructor(listSelector) {
    this.#list = document.querySelector(listSelector);
    this.#items = Array.from(this.#list.children /*자식 요소들 */);

    // 컴포넌트 초기화
    this.#init();
  }

  #init() {
    // 이벤트 바인딩(연결)
    // this.#bindEvents();

    // 구조 분해 할당
    const { DRAGGING_CLASSNAME } = SortableList;

    const list = this.#list;
    const items = this.#items;
    // 1. 리스트 아이템 핸들링

    list.addEventListener("dragover", (e) => {
      // 브라우저 기본 작동 중지
      e.preventDefault();
      // TODO : 현재 드래깅 중인 아이템 찾기
      const draggedItem = items.find((item) =>
        item.classList.contains(DRAGGING_CLASSNAME)
      );
      // TODO : 드래깅 중인 요소가 아닌 나머지 아이템 집합 찾기
      const restItems = items.filter((item) => !Object.is(item, draggedItem));
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

    // 2. 리스트 아이템 순환 , 각 아이템 이벤트 핸들링
    items.forEach((item) => {
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
      const handleButton = item.querySelector("[data-role=handle]");
      if (handleButton) {
        handleButton.addEventListener("keyup", (e) => {
          switch (e.key) {
            case "ArrowUp":
              // case "ArrowLeft":
              const prevItem = item.previousElementSibling;
              if (prevItem) {
                prevItem.before(item);
                e.currentTarget.focus();
              }
              break;
            case "ArrowDown":
              // case "ArrowRight":
              const nextItem = item.nextElementSibling;
              if (nextItem) {
                nextItem.after(item);
                e.currentTarget.focus();
              }
              break;
          }
        });
      }
    });
  }
  // 인스턴스 메서드 (공유)
}
