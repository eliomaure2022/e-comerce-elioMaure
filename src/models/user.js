const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: eliopez
 *         email:
 *           type: string
 *           example: elio_maure@yahoo.com.ar
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: elio_maure@yahoo.com.ar
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: eliopez
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: elioian@gmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

class user extends Sequelize.Model {
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
        username: {
          type: DataTypes.STRING(15),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(25),
          allowNull: false,
          unique: "users_email_key",
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        hooks: {
          beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
          },
        },
        sequelize,
        tableName: "user",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "users_email_key",
            unique: true,
            fields: [{ name: "email" }],
          },
          {
            name: "user_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
