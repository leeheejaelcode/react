// Virtual DOM
// 가상 문서 객체 모델
// 실제 DOM을 추상화(단순화)

import { createElement } from "./lib/virtual/index.js";

// 실제 DOM 구성 (엘리먼트 트리)
// 웹 API를 사용해 문서 객체(Document Object) 생성

// 부모(상위) 요소
const figureElement = document.createElement("figure");

// 자식(하위) 요소
const figcaptionElement = document.createElement("figcaption");
figureElement.append(figcaptionElement);

console.dir(figureElement);
// 가상(추상화된, 단순화된) 요소 (엘리먼트) 생성
const figureVElement = createElement("figure");
console.dir(figureVElement);
