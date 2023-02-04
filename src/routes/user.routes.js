const { Router } = require("express");
const {
  getAllProductsInCart,
  getOrderToUser,
} = require("../controllers/user.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get users whith products
 *     tags: [User]
 *     parameters:
 *       in: user
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimun: 1
 *       description: user id
 *     responses:
 *       200:
 *         description: get
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/user/{id}/order:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get user with orders
 *     tags: [User]
 *     parameters:
 *       in: user
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimun: 1
 *       description: user id
 *     responses:
 *       200:
 *         description: get
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user with orders
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 *
 */

router.get("/:id", getAllProductsInCart);
router.get("/:id/order", getOrderToUser);

module.exports = router;
