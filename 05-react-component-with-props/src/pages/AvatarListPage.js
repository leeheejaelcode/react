// import React, { createElement as h } from "https://esm.sh/react";
// import Avatar from "../components/avatar/Avatar.function.js";
// import AvatarList from "../components/avatar/AvatarList.function.js";
// import data from "../data/avatar.js";

// export default function AvatarListPage() {
//   return h(AvatarList, {
//     className: "avatarContainer",
//     children: data.map(({ id, title }) => h(Avatar, { id, title })),
//   });
// }
import { createElement as h } from "https://esm.sh/react";
import Avatar from "../components/avatar/Avatar.js";

function AvatarListPage() {
  return h(
    "ul",
    {
      className: "AvatarList",
    },
    h(
      "li",
      null,
      h(Avatar, { name: "야무", photo: "man-02.jpg", status: "online" })
    ),
    h(
      "li",
      null,
      h(Avatar, { name: "범쌤", photo: "man-04.jpg", status: "away" })
    )
  );
}

export default AvatarListPage;
