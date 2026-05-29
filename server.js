const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const SQLiteStore = require("connect-sqlite3")(session);
const path = require("path");
const passport = require("passport");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const db = require("./database/connection");
const authRoute = require("./routes/authRoute");
const booksRoute = require("./routes/booksRoute");
const movieRoute = require("./routes/moviesRoute");
const port = process.env.PORT || 7500;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: "session.db", dir: "./database" }),
  }),
);

app.use(passport.authenticate("session"));

app.use(logger("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/oauth2/", authRoute);
app.use("/books/", booksRoute);
app.use("/movies/", movieRoute);

app.listen(port, () => {
  console.log(`CRUD app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
