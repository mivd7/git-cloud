class ShoppingCart {
  constructor() {
    }

  getItems() {
      this.items = []
      return this.items
  }


  addItem(itemName, quantity, price) {
      return this.items.push({name: itemName,
                              quantity: quantity,
                              pricePerUnit: price})
    }
}
module.exports = ShoppingCart
