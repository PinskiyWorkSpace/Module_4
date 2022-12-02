'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(item, price, n = 1) {
        this.items.push(item);
        this.totalPrice = this.totalPrice + price;
        this.count = this.count + n;
    }, 
    increaseCount(n) {
        return this.count = this.count + n;
    },
    calculateItemPrice() {

    },
    clear() {
        this.items = [];
        this.totalPrice = 0 ;
        this.count = 0 ;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice * this.count);
    },
};




cart.add('samsung', 30000, 5);
cart.add('nokia', 17000, 2);
cart.add('ihone', 50000, 3);

cart.print();