function showVar() {
    var a = 10;
    if(true) {
        var a = 50;
        console.log(a);
    }

    console.log(a);
}

// showVar();

function showLet() {
    let a = 20;
    if(true) {
        let a = 50;
        console.log(a);
    }

    console.log(a);
}

// showLet();

for(var a = 0; a < 10; a++) {
    // console.log(a);
}

for(let b = 0; b < 10; b++) {
    // console.log(b);
}

// console.log(a);