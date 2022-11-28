const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
let newNames = [];

const addPrefix = (i) => {
    for (elem of names) {
        newNames = newNames.concat(i + ' ' + elem);
    }
}

addPrefix('Mr');
console.log(newNames);