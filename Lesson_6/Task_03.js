const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
let newNames = [];

const addPrefix = (x) => {
    for (elem of names) {
        newNames = newNames.concat(x + ' ' + elem);
    }
}

addPrefix('Mr');
console.log(newNames);