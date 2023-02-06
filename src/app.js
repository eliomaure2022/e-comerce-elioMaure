const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const error = require("./middlewares/error.middleware");
const routerApi = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

db.authenticate()
  .then(() => console.log("Base de datos autenticada"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de satos sincronizada"))
  .catch((error) => console.log(error));

routerApi(app);

app.use(error);

module.exports = app;
