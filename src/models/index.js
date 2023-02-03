const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);
const { user, product, productInOrder, productInCart, order, cart } = models;

// db.sync({ force: true })
//   .then(() => console.log("Base de satos sincronizada"))
//   .catch((error) => console.log(error));

module.exports = { user, product, productInOrder, productInCart, order, cart };
