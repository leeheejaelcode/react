import React, { createElement as h } from "https://esm.sh/react";
// 컴포넌트 추출

// 1. 리액트 클래스 컴포넌트 (재사용)
// 리액트 컴포넌트는 반드시 파스칼케이스(ParcalCase) 유형으로 이름으로 작성
// 웹 컴포넌트 반드시 이름을 케밥케이스 유형으로 작성 (예: <euid-list>)
export default class NumberList extends React.Component {
  // 컨스트럭터(constructor)
  constructor(props /*컴포넌트 속성 */) {
    super(props);

    // 암묵적으로 클래스로부터 생성된 인스턴스
    // return this;
  }

  // 렌더(render) 메서드 (인스턴스 공용)
  render() {
    // 컴포넌트 속성(props) 접근
    // props는 읽기 전용(readonly)
    // console.log(this.props);

    // 컴포넌트의 자식들은 배열이다
    const children = Array(this.props.count)
      .fill(null)
      .map((_, index) => h("li", {}, `${index + 1}01`));

    // 리액트 엘리먼트 반환
    return h(
      "ul",
      { id: this.props.id, className: "architectures", lang: "en" },
      children
    );
  }
}
