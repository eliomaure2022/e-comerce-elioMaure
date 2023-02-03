const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailer");
const CartServises = require("../services/cart.services");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      const user_id = result.id;
      const total_price = 0;
      const newCart = { user_id, total_price };
      await CartServises.createCart(newCart);
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "elioian2014@gmail.com",
        subject: "Email confirmation",
        html: "<h1>Bienvenido a nuestro e-comerce</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
      });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email provider",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password provider",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      result.user.token = token;
      console.log(result.user);
      res.json(result.user);
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    next({ message: "Something wrong" });
  }
};

module.exports = { register, login };
