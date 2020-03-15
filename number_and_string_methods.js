let personalInfo = 'I am Plabon Costa Junior Software Developer at Penta Global Limited dreams to be a master js developer with php skill';

// console.log(personalInfo.startsWith('Plabon'));
// console.log(personalInfo.endsWith('skill'));
// console.log(personalInfo.includes('Joseph'));

// Hexa Decimal Number 
// console.log(0xA);

// Binary Number
// console.log(0b11);

// Octal Number
// console.log(0o12);

// console.log(Number.isFinite('Plabon'));
// console.log(Number.isInteger(0.9));
// console.log(Number.isSafeInteger(0.3));
// console.log(Number.isNaN(NaN)); 

// const args1 = [1,2,3];
// const args2 = [4,5];

// function getArgument() {
//     console.log([...args1, ...args2]);
// }

// const getArrowArgument = () => {
//     console.log([...args1, ...args2]);
// }

// getArgument.apply(null, args);
// getArgument(...args);
// getArgument(...args1, ...args2);
// getArrowArgument(...args1); 


function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArr = function(arr) {
    return arr.map((item) => {
        console.log(`${this.prefix} ${item}`);
    });
}

// let pre = new Prefixer('Hello');
// pre.prefixArr(['Plabon', 'Rakib', 'Shuvo', 'Shahadat']);


