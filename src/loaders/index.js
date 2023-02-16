const ExpressServer = require("./server/expressServer.js");
const config = require("../config");

module.exports = async () => {
  const server = new ExpressServer();
  console.log("> Express server loaded");

  server.start();
  console.log(`> Server running on port: ${config.port}`);
};
