const UserServices = require("../services/user.services");

const getAllProductsInCart = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getOrderToUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getAll(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = { getAllProductsInCart, getOrderToUser };
