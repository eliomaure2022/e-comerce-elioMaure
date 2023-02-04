const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/product.controller");
// const verifyToken = require("../middlewares/auth.middelware");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary: create a new product into the app
 *     tags: [Product]
 *     requestBody:
 *       description: required fields to add a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createProduct'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 *       400:
 *         description: not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 *   get:
 *     summary: get all products to the user
 *     tags: [Product]
 *     requestBody:
 *       description: required fields to get all products to users
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/getAllProducts'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: all products
 *       400:
 *         description: not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong  vf  nnu7
 */

router.post("/", createProduct);
router.get("/", getAllProducts);

module.exports = router;
