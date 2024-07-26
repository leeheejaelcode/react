import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import { ArchitectureListPage } from "./pages/ArchitectureListPage.js";
import AvatarListPage from "./pages/AvatarListPage.js";
// 데이터 가져오기
import listData from "./data/list.js";
// 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("react-app");

// DOM 요소가 존재한다면?
if (container) {
  createRoot(container).render(React.createElement(AvatarListPage));
}
// 존재하지 않는다면?
else {
  // 개발자에게 경고
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

// 아바타 컴포넌트 및 페이지 컴포넌트 작성 후 화면에 표시
// 1. 페이지 컴포넌트 작성 및 main.js 연결
// 2. 아바타 컴포너트 작성 및 status 속성(props) 설정
// 3. status 속성에 따라 화면에 표시되는 Avatar 구성
