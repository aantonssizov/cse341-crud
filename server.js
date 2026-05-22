const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const db = require("./database/connection");
const booksRoute = require("./routes/booksRoute");
const port = process.env.PORT || 7500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/books/", booksRoute);

app.listen(port, () => {
  console.log(`CRUD app listening on port ${port}`);
});
