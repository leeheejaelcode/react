// mjs
// JavaScript를 사용해서 Node.js 런타임 환경에서 실행시킬 프로그램 작성

// const liveServer = require("live-server");
import liveServer from "live-server";

const params = {
  host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  port: 3000, // Set the server port. Defaults to 8080.
  root: ".", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  mount: [["/", "./public"]], // Mount a directory to a route.
};

liveServer.start(params);
