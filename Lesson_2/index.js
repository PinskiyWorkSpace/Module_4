
const nameProduct = prompt('Наименование товара');
const quantityProduct = +prompt('Количество товара');
const categoryProduct = prompt('Категория товара');
const priseProduct = +prompt('Цена товара');

const sum = quantityProduct * priseProduct;

console.log('quantityProduct: ', typeof(quantityProduct));

console.log('priseProduct: ', typeof(priseProduct));

console.log(`На складе ${quantityProduct} единицы товара "${nameProduct}" на сумму ${sum} деревянных`);