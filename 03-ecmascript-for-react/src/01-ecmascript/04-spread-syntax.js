// --------------------------------------------------------------------------
// spread syntax
// - 전개 구문을 사용해 배열 병합
// - 전개 구문을 사용해 객체 병합
// --------------------------------------------------------------------------
function combineArray() {
  const numberList = [2, -2, 1];
  const countList = [101, 201, 301];

  const nList = numberList.concat(countList); // a.concat(b);
  console.log(nList);

  const myResult = numberList
    .slice(0, 2)
    .concat(countList.slice(0, 2))
    .concat([numberList.at(-1)]);
  // console.log(myResult);

  const combineList = countList
    .slice(0, 2) // [101, 201]
    .concat(numberList) // [2, -2, 1] -> [ 101, 201, 2, -2, 1]
    .concat(countList.slice(2)); // [101, 201, 2, -2, 1] -> [101, 201, 2, -2, 1, 301]

  console.log(combineList);

  // 🔶 전개 구문을 사용해 spreadCombineList 배열 병합 코드를 작성하세요.
  // 참고: https://mzl.la/43TCLgA | https://mzl.la/3VTzEDh | https://mzl.la/3vC07ec
  const spreadCombineList = [
    ...countList.slice(0, 2),
    ...numberList,
    countList.at(-1),
  ];
  console.log(spreadCombineList);

  // 아래 결과 값이 true가 나와야 합니다.
  console.log(Object.is(combineList.length, spreadCombineList.length));
}

function combineObject() {
  // 개발자가 작성한 기본 옵션
  const defaultOptions = {
    startIndex: 0,
    loop: false,
  };
  // 사용자가 설정한 커스텀 옵션
  const customOptions = {
    loop: true,
  };
  // ES5 (2009)
  const combineOptions = Object.assign({}, defaultOptions, customOptions);
  console.log(combineOptions);
  console.log(defaultOptions);

  // 🔶 전개 구문을 사용해 spreadCombineOptions 객체 병합 코드를 작성하세요.
  // 참고: https://mzl.la/43TCLgA
  const spreadCombineOptions = {
    ...defaultOptions,
    ...combineOptions,
  };
  console.log(spreadCombineOptions);

  // 아래 결과 값이 true가 나와야 합니다.
  console.log(Object.is(combineOptions.loop, spreadCombineOptions.loop));
}

function run() {
  combineArray();
  combineObject();
}

run();
