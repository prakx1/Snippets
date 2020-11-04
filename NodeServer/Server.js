const { constants } = require("buffer");
const http = require("http");
const Routes = require("./Routes");
const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer(Routes.handleRequest);
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening on ${PORT}`);
});
