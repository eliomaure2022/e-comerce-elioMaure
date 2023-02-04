const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return cart.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     addProduct:
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
 *           example: 3
 */

class cart extends Sequelize.Model {
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
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
        total_price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "cart",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "cart_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
