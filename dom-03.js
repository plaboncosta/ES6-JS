"use strict";

// let button = document.getElementById('eventButton');
// button.style.display = 'none';
// button.addEventListener('click', e => {
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // console.log(e.target.innerText);
    // document.getElementById('todo-title').innerText = document.location.href; 

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.type);

    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    // console.log(e.altKey);
// });

const eventCall = e => {
    console.log(e.type);
}

// button.addEventListener('dblclick', eventCall);
// button.addEventListener('mousedown', eventCall);
// button.addEventListener('mouseup', eventCall);
// button.addEventListener('mouseenter', eventCall);
// button.addEventListener('mouseleave', eventCall);
// button.addEventListener('mousemove', eventCall);
// button.addEventListener('mouseout', eventCall);
// button.addEventListener('mouseover', eventCall);

// let eventDiv = document.getElementById('event-check');
// eventDiv.addEventListener('mouseenter', eventCall); // Only above parent node
// eventDiv.addEventListener('mouseover', eventCall); // also for chlid node
// eventDiv.addEventListener('mouseleave', eventCall); // Only above parent node
// eventDiv.addEventListener('mouseout', eventCall); // also for chlid node

const inputEventCall = e => {
    console.log(e.type);
    console.log(e.target.value);
}

// let input = document.querySelector('input[type="text"]');
// input.addEventListener('keydown', inputEventCall);
// input.addEventListener('keyup', inputEventCall);
// input.addEventListener('keypress', inputEventCall);
// input.addEventListener('focus', inputEventCall);
// input.addEventListener('blur', inputEventCall);
// input.addEventListener('cut', inputEventCall);
// input.addEventListener('paste', inputEventCall);
// input.addEventListener('input', inputEventCall);

// let select = document.querySelector('select');
// select.addEventListener('change', inputEventCall);
// select.addEventListener('input', inputEventCall);


let form = document.querySelector('#todo-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let value = {};
    for(let i = 0; i < form.length; i++) {
        if (form[i].name) Object.assign(value, {[form[i].name]: form[i].value});
    }

    console.log(value);
});
