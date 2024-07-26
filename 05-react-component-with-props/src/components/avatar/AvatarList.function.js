import React, { createElement as h } from "https://esm.sh/react";
import Avatar from "./Avatar.function.js";
import data from "../../data/avatar.js";

export default function AvatarList(props) {
  const { src, alt } = props;
  return h("ul", {
    className: "avatarContainer",
    children: data.map(({ src, status }) => h(Avatar, { src, status })),
  });
}
