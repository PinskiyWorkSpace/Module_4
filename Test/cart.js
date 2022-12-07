const cart = {
	items: [],
	count: 0,
	

	get totalPrice () {
		return this.calculateItemPrice();

	},

	calculateItemPrice() {
    const priceWithoutDiscount = this.items.reduce((sum, item) => 
        sum + item.productPrice * item.productCount, 0);
        return priceWithoutDiscount;
    },


//   const priceWithoutDiscount = this.items.reduce((sum, item) =>
// sum + item.price * item.quantity, 0);

// return priceWithoutDiscount - this.discount / 100 * priceWithoutDiscount;
// },

		// let totalPrice = 0;
		// this.items.forEach(item => {
		// 	const itemPrice = item.productPrice * item.productCount;
		// 	totalPrice += itemPrice;
			// console.log(totalPrice);
		// return totalPrice;

	add(productName, productPrice, productCount = 1) {

		const newItem = { productName, productPrice, productCount };
		this.items.push(newItem);
		this.increaseCount(productCount);
		
	},

	increaseCount(counter) {
		return this.count += counter;
	},
	
  print() {
    console.log(cart.items);
    console.log(this.totalPrice);
},
};

// Performing tests for metheds of cart object:

cart.add('samsung', 30000, 5);
cart.add('nokia', 17000, 2);
cart.add('ihone', 50000, 3);
// console.log("🚀 ~ file: cart.js ~ line 60 ~ add ~ items", cart.items);
cart.totalPrice;
//cart.print();


items: [
  {
    nameProduct: 'samsung',
    priceProduct: 30000,
    countProduct: 5
  }
]