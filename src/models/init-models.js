const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _order = require("./order");
const _product = require("./product");
const _productInCart = require("./productInCart");
const _productInOrder = require("./productInOrder");
const _user = require("./user");

function initModels(sequelize) {
  const user = _user(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const productInCart = _productInCart(sequelize, DataTypes);
  const productInOrder = _productInOrder(sequelize, DataTypes);

  productInCart.belongsTo(cart, { as: "cart", foreignKey: "cart_id" });
  cart.hasMany(productInCart, { as: "productInCarts", foreignKey: "cart_id" });
  productInOrder.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(productInOrder, {
    as: "productInOrders",
    foreignKey: "order_id",
  });
  productInCart.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(productInCart, {
    as: "productInCarts",
    foreignKey: "product_id",
  });
  productInOrder.belongsTo(product, {
    as: "product",
    foreignKey: "product_id",
  });
  product.hasMany(productInOrder, {
    as: "productInOrders",
    foreignKey: "product_id",
  });
  cart.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(cart, { as: "carts", foreignKey: "user_id" });
  order.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(order, { as: "orders", foreignKey: "user_id" });
  product.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(product, { as: "products", foreignKey: "user_id" });

  return {
    user,
    cart,
    product,
    order,
    productInCart,
    productInOrder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
