// --------------------------------------------------------------------------
// ✅ 선언형 프로그래밍
// --------------------------------------------------------------------------
// - [x] 선언적 프로그래밍을 가능하게 하는 도구 사용 필요(createState)
// - [x] 체크박스 활성 상태를 선언합니다.
// - [x] 체크박스 및 버튼을 렌더링 하는 함수를 작성합니다.
// - [ ] 선언된 상태가 변경되면, 체크박스와 버튼을 다시 렌더링합니다.
// --------------------------------------------------------------------------

import createState from "../lib/createState";
// 무엇을 상태로 선언할 것인가?
const data = {
  checked: false,
};
// ui 업데이트 제어
const render = () => {
  const { checked } = state;
  console.log("업데이트", checked);
  (checkbox as HTMLInputElement).checked = checked;
  if (checked) {
    button.removeAttribute("disabled");
    button.textContent = "활성 상태";
  } else {
    button.setAttribute("disabled", "true");
    button.textContent = "비활성 상태";
  }
};

const update = (globalThis.update = (value: boolean): void => {
  setState("checked", value);
});

const container = document.querySelector("#declarative-programming");
const checkbox = container.querySelector("[type=checkbox]") as HTMLInputElement;
const button = container.querySelector("button");

checkbox.addEventListener("change", (e: Event) => {
  const { checked: nextCheckedValue } = e.target as HTMLInputElement;
  // 상태 업데이트 시도
  update(nextCheckedValue);
});

// 상태 선언
const [state, setState] = createState(data, render); // [State, updateState]

render();
