// --------------------------------------------------------------------------
// ✅ 순수 함수란?
// --------------------------------------------------------------------------
// - [ ] 함수의 순수성(purity)이란?
// - [ ] 함수가 순수한 지 여부는 어떻게 확인해야 할까?
// --------------------------------------------------------------------------
/**@type{(text:string, limit?:number) => string} */
function truncateText(text, limit = 100) {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }
  return text;
}

// 순수 함수의 요건 : 동일 입력 -> 동일 출력
// 순수함이란? 계산된 결과가 동일함을 말한다.
const testText = 'yamoo9 '.repeat(35);
console.log(1, truncateText(testText));
console.log(2, truncateText(testText));
