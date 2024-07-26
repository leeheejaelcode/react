import React, { createElement as h } from "https://esm.sh/react";

export default function Avatar(props) {
  const { src, alt, status } = props;
  return h(
    "li",
    { className: "avatar" },
    h("img", { src: src, alt: alt }),
    h("span", { className: status })
  );
}
