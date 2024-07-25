// Virtual DOM
// 가상 문서 객체 모델
// 실제 DOM을 추상화(단순화)

import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

// 실제 DOM 구성 (엘리먼트 트리)
// 웹 API를 사용해 문서 객체(Document Object) 생성

// 부모(상위) 요소
const figureElement = document.createElement("figure");

// 자식(하위) 요소
const figcaptionElement = document.createElement("figcaption");
figureElement.append(figcaptionElement);

console.dir(figureElement);
// 가상(추상화된, 단순화된) 요소 (엘리먼트) 생성

// API : createElement([ type, props, child1, child2, ..., childN])
// API : createElement([ type, props, ...children])

// 부모 요소
const figcaptionVElement = createElement("figcaption");

const figureVElement = createElement("figure", null, figcaptionVElement);
console.dir(figureVElement);

// virtual-dom / createRoot

// API : createRoot(container)
const virtualRootElement = document.getElementById("virtual-dom");
const vRoot = createRoot(virtualRootElement);
vRoot.render(figureVElement);

// 실제 DOM은 복잡하고 가상 DOM은 복잡하지 않다.
// 실제 DOM에 마운트(mount, 착장 === 렌더링)
const actualDomElement = document.getElementById("actual-dom");
console.log(actualDomElement);

actualDomElement.append(figureElement);
