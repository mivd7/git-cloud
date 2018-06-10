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

  clone() {
      let copyCart = new ShoppingCart()
      copyCart.items = this.items.map(item => this.items.slice(item))
      return copyCart
  }
}

module.exports = ShoppingCart
