const liveServer = require("live-server");

const params = {
  port: 3000, // Set the server port. Defaults to 8080.
  host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: ".", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  mount: [["/", "./public"]], // Mount a directory to a route.
};

liveServer.start(params);
