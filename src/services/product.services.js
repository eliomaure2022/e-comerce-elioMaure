const { Op } = require("sequelize");
const { product } = require("../models");
const { user } = require("../models");

class ProductServices {
  static async getAll() {
    try {
      const result = await product.findAll({
        where: { available_qty: { [Op.gt]: 0 } },
        include: {
          attributes: ["username"],
          model: user,
          as: "user",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newProduct) {
    try {
      const result = await product.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
