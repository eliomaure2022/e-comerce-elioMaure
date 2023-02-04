const { Router } = require("express");
const { addProduct } = require("../controllers/cart.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   post:
 *     summary: add product at cart
 *     tags: [Cart]
 *     parameters:
 *       in: cart
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimun: 1
 *         description: user id
 *     requestBody:
 *       description: required fields to add product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/addProduct'
 *     responses:
 *       200:
 *         description: post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product agree
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 *
 */

router.post("/:id", addProduct);

module.exports = router;
