const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     sumary: Create a new user into aplication
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schemas:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 * /api/v1/auth/login:
 *   post:
 *     sumary: Login an existing user into the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           aplication/json:
 *             schema:
 *               $ref: '#/components/schemas/loginResponse'
 *       400:
 *         description: not found
 *         content:
 *           aplication/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found / something wrong / not password or email provider /
 *
 */

router.post("/register", register);
router.post("/login", login);

module.exports = router;
