const { Router } = require("express");
const { createOrder } = require("../controllers/order.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/order/{id}:
 *   post:
 *     summary: create a buy
 *     tags: [Order]
 *     parameters:
 *       in: order
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimun: 1
 *       description: cart id
 *     responses:
 *       201:
 *         description: post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: order created
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
 */

router.post("/:id", createOrder);

module.exports = router;
