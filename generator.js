"use strict";

function *generator() {
    console.log('Hello Plabon');
    yield 'First Pause';
    console.log('Hello Joseph');
    yield 'Second Pause';
    console.log('Hello Costa');
    yield 'Third Pause';
    return 'Return Forever';
}

let g = generator();
// console.log(g.next().value);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

for(let val of g ) {
    console.log(val);
}