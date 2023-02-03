const {
  order,
  cart,
  product,
  productInCart,
  productInOrder,
} = require("../models");

class OrderServices {
  static async createNewOrder(id) {
    try {
      const cartToUser = await cart.findOne({ where: { user_id } });
      const newOrder = { user_id: id, total_price: cartToUser.total_price };
      const result = await order.create(newOrder);
      const productCart = await productInCart.findAll({
        where: { cart_id: cartToUser.id },
      });
      productCart.forEach(async (arrayProducts) => {
        const { product_id, quantity } = arrayProducts;
        const productId = await product.findOne({
          where: { id: arrayProducts.product_id },
        });
        await productInOrder.create({
          product_id,
          quantity,
          order_id: result.id,
          price: productId.price,
        });
        await productInCart.destroy({
          where: { cart_id: cartToUser.id },
        });
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
