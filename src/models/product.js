const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: tv led
 *         price:
 *           type: string
 *           example: 1500
 *         available_qty:
 *           type: integer
 *           example: 3
 *         image_url:
 *           type: string
 *           example: https://d3ugyf2ht6aenh.cloudfront.net/stores/001/955/262/products/flip-511-b34b410f73b756b8f216389028421439-1024-1024.jpg
 *         status:
 *           type: bool
 *           example: false
 *         user_id:
 *           type: integer
 *           example: 1
 *
 */

class product extends Sequelize.Model {
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
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        available_qty: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "product",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
