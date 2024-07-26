import React from "https://esm.sh/react";

// React 함수 컴포넌트(Functional Component)
function ArchitectureList(props) {
  const { lang, children } = props;
  return React.createElement(
    "ul",
    { className: "architectures", lang },
    children
  );
}

export default ArchitectureList;
