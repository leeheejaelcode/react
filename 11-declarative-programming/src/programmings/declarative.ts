// --------------------------------------------------------------------------
// ✅ 선언형 프로그래밍
// --------------------------------------------------------------------------
// - [ ] 선언적 프로그래밍을 가능하게 하는 도구 사용 필요(createState)
// - [ ] 체크박스 활성 상태를 선언합니다.
// - [ ] 체크박스 및 버튼을 렌더링 하는 함수를 작성합니다.
// - [ ] 선언된 상태가 변경되면, 체크박스와 버튼을 다시 렌더링합니다.
// --------------------------------------------------------------------------

import createState from "../lib/createState";
// 상태로 사용할 데이터 정의
const data = {
  checked: false,
};
// 상태 업데이트가 감지되면 실행될 콜백 함수
const render = () => {
  // 선언된 상태 확인
  console.log("[checked 상태 업데이트]: ", state.checked);
};
// 상태 선언
const [state, setState] = createState(data, render); // [State, updateState]

// 선언된 상태 확인
console.log("[checked 초기 상태]: ", state.checked);

function update() {
  // 상태 업데이트 (다음 번 상태 업데이트 값 설정)
  const nextCheckedValue = !state.checked;
  setState("checked", nextCheckedValue);
}
