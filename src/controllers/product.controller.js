const ProductServices = require("../services/product.services");

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.create(newProduct);
    res.status(201).json({ result, message: "product created" });
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
