"use strict";

let humanAge = [21, 22, 23, 43,53];
let agesSet = new Set(humanAge);

agesSet.add('Plabon');
agesSet.add({title: 'Costa', profession: 'Software Developer'});
agesSet.add(['html', 'css', 'javascript', 'php']);
agesSet.delete(21);

// console.log(agesSet);
// console.log(agesSet.size);

// let total = humanAge.reduce((a, b) => a + b, 0);
// document.getElementById('set-list-total').innerHTML = `(${agesSet.size})`;
// let setList = document.getElementById("set-list");
// const addElement = item => {
//     let li = document.createElement('li');
//     li.innerHTML = typeof(item) === 'string' ? item.toUpperCase() : item;
//     li.classList.add('list');
//     setList.appendChild(li);
// }
// agesSet.forEach(item => {
//     if(typeof(item) === 'object') Object.keys(item).length > 0 && !item.length && Object.keys(item).forEach(val => addElement(val));
//     if(typeof(item) === 'object') item.length > 0 && item.forEach(val => addElement(val));
//     else addElement(item);
// });

let map = new Map([['a', 'Apple'], ['b', 'Banana']]);
map.set('a1', 'Area');
map.delete('b');
// console.log(map);


let weakSet = new WeakSet();
let car = {
    make: 'Honda',
    model : 'Civic'
}
let car2 = {
    make: 'Toyota',
    model: 'Masdaq'
}
weakSet.add(car);
weakSet.add(car2);
// weakSet.delete(car);
// console.log(weakSet);


let weakMap = new WeakMap();
let key1 = {
    id: 1
}
let car1 = {
    make: 'Honda',
    model : 'Civic',
    number: [1,2,3,4,5]
}
let key2 = {
    id: 2
}
let car3 = {
    make: 'Toyota',
    model: 'Masdaq'
}

weakMap.set(key1, car1);
weakMap.set(key2, car3);
weakMap.delete(key2);
// console.log(weakMap);






