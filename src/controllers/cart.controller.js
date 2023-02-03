const CartServises = require("../services/cart.services");

const addProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { cart_id, product_id, quantity, price } = req.body;
    const newProductInCart = { cart_id: id, product_id, quantity, price };
    const result = await CartServises.addProduct(newProductInCart);
    res.status(201).json({ result, message: "product agree" });
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = { addProduct };
