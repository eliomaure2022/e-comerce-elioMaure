const { user, cart, productInCart, order } = require("../models");

class UserServices {
  static async getById(id) {
    try {
      const result = await user.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: cart,
          as: "carts",
          include: {
            model: productInCart,
            as: "productInCarts",
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll(id) {
    try {
      const result = await user.findAll({
        where: { id },
        attributes: ["username"],
        include: {
          model: order,
          as: "orders",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
