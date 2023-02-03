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
 *             $ref: '#/components/schema/createProduct'
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
 */

router.post("/", createProduct);
router.get("/", getAllProducts);

module.exports = router;
