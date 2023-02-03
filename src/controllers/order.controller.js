const OrderServices = require("../services/order.services");

const createOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OrderServices.createNewOrder(id);
    res.status(201).json({ result, message: " order created" });
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = { createOrder };
