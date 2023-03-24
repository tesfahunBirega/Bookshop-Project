const http = require("http");
const app = require("./src/api/v1/index");
const swaggerOptions = require("./src/config/swagger");
const port = 7000;

const swaggerUi = require("swagger-ui-express");
const swaggerJsDocS = require("swagger-jsdoc");

const server = http.createServer(app);

const swaggerDocs = swaggerJsDocS(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.listen(port, () => {
  console.log(`Express Crud is running on port http://localhost:${port}`);
});

