'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, count = 1) {
    const newProduct = {
      name,
      price,
      count,
    };
    this.items.push(newProduct);
    this.increaseCount(count);
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 0.15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 0.21;
    }
  },
  increaseCount(n) {
    return this.count += n;
  },
  calculateItemPrice() {
    const calcSum =
    this.items.reduce((acc, item) => acc + item.price * item.count, 0);
    return calcSum - (calcSum * this.discount);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items).padStart(''));
    console.log(this.totalPrice);
  },
};

cart.add('samsung', 30000, 5);
cart.add('nokia', 17000, 2);
cart.add('ihone', 50000, 3);


cart.setDiscount = 'NEWYEAR';
cart.print();

