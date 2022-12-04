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
        this.totalPrice = this.totalPrice + (price * n);
        this.count = this.count + n;
    }, 
    increaseCount(n) {
        return this.count = this.count + n;
    },
    calculateItemPrice() {
        return this.totalPrice = this.items.reduce((sum, count) => {
            sum * count;
        }, 0);
    },
    clear() {
        this.items = [];
        this.totalPrice = 0 ;
        this.count = 0 ;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
};


cart.add('samsung', 30000, 5);
cart.add('nokia', 17000, 2);
cart.add('ihone', 50000, 3);

cart.print();
