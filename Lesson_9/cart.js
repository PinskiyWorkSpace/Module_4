'use strict';

const cart = {
    items: [],
    get totalPrice() {
        return this.calculateItemPrice();
    },
    count: 0,
    
    add(name, price, count = 1) {
        const newProduct = {
            name,
            price,
            count,
        };
        this.items.push(newProduct);
        this.increaseCount(count);
    }, 
    increaseCount(n) {
        return this.count = this.count + n;
    },
    calculateItemPrice() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.count;
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

