const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");
const verifyToken = require("../middlewares/auth.middelware");

const routerApi = (app) => {
  app.use("/api/v1/users", verifyToken, userRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/products", productRoutes);
  app.use("/api/v1/cart", cartRoutes);
  app.use("/api/v1/order", orderRoutes);
};

module.exports = routerApi;
