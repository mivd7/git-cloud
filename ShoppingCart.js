class ShoppingCart {
  constructor() {
    this.items = []
    }

  getItems() {
      return this.items
  }


  addItem(itemName, quantity, price) {
      return this.items.push({name: itemName,
                              quantity: quantity,
                              pricePerUnit: price})
  }

  clear() {
      return this.items = []
     }
}

module.exports = ShoppingCart
