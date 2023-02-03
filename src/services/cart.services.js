const { cart, productInCart, product } = require("../models");

class CartServises {
  static async createCart(newCart) {
    try {
      const result = await cart.create(newCart);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProductIncart) {
    try {
      const result = await productInCart.create(newProductIncart);
      const productAdd = await product.findOne({
        where: { id: result.product_id },
      });
      const car = await cart.findOne({
        where: { id: newProductIncart.cart_id },
      });
      await cart.update(
        {
          total_price:
            car.total_price + productAdd.price * newProductIncart.quantity,
        },
        { where: { id: newProductIncart.cart_id } }
      );
      await product.update(
        { available_qty: productAdd.available_qty - newProductIncart.quantity },
        { where: { id: productAdd.id } }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServises;
