const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const db = require("./database/connection");
const booksRoute = require("./routes/booksRoute");
const movieRoute = require("./routes/moviesRoute");
const port = process.env.PORT || 7500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/books/", booksRoute);
app.use("/movies/", movieRoute);

app.listen(port, () => {
  console.log(`CRUD app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
