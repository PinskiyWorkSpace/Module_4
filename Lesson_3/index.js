
const nameProduct = prompt('Наименование товара');
const quantityProduct = +prompt('Количество товара');
const categoryProduct = prompt('Категория товара');
const priseProduct = +prompt('Цена товара');

const sum = quantityProduct * priseProduct;


if (Number.isFinite(quantityProduct) && Number.isFinite(priseProduct)) {
    console.log(`На складе ${quantityProduct} единицы товара "${nameProduct}" на сумму ${sum} деревянных`);
} else {
    console.log("Вы ввели некорректные данные");
};



