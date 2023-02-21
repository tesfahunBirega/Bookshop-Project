const http = require("http");
const app = require("./src/api/v1/index");
//const app = require("./src/api/v2/index");

const PORT = process.env.APP_PORT || 6000;


const server = http.createServer(app);



server.listen(PORT, () => {
  console.log(`Express Crud is running on port http://localhost:${PORT}`);
});


