const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return productInCart.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     addProductToCart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: string
 *           example: 2500
 *         cart_id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 2
 */

class productInCart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        cart_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "cart",
            key: "id",
          },
        },
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "product",
            key: "id",
          },
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "productInCart",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "productInCart_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
