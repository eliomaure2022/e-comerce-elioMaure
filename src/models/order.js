const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return order.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     createProduct:
 *       type: object
 *       properties:
 *         total_price:
 *           type: double
 *           example: 1500
 *         type:
 *           type: enum
 *           example: pending
 *         user_id:
 *           type: integer
 *           example: 1
 */

class order extends Sequelize.Model {
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
        total_price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "order",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "order_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
