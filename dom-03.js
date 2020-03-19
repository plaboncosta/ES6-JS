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
let list = document.getElementById('todo-item-ul');
form.addEventListener('submit', e => {
    e.preventDefault();
    let dataSet = {};
    for(let i = 0; i < form.length; i++) {
        if (form[i].name) Object.assign(dataSet, {[form[i].name]: form[i].value});
    }

    let beforeLi = document.querySelector('.todo-item-li:first-child');
    let insertLi = document.createElement('li');
    insertLi.className = 'todo-item-li';
    const text = document.createTextNode(dataSet.item);
    insertLi.appendChild(text);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.appendChild(document.createTextNode('X'));
    insertLi.appendChild(deleteBtn);
    
    list.insertBefore(insertLi, beforeLi);
    document.getElementById('item-list-count').innerText = `Item List (${list.children.length})`;
    document.querySelector('input[name="item"]').value = '';
});


list.addEventListener('click', e => {
    if(!e.target.classList.contains('delete-btn')) return;
    if(confirm('Are you sure want to delete this item?')) list.removeChild(e.target.parentElement);
    document.getElementById('item-list-count').innerText = `Item List (${list.children.length})`;
}); 

let searchBox = document.getElementById('search-box');
searchBox.addEventListener('keyup', e => {
    const searchText = e.target.value.toLowerCase();
    // const items = list.getElementsByTagName('li');
    Array.from(list.children).forEach(item => {
        let listText = item.firstChild.textContent.toLowerCase();
        // if(listText.indexOf(searchText) != -1) item.style.display = 'block';
        // else item.style.display = 'none';
        if(listText.includes(searchText)) item.style.display = 'block';
        else item.style.display = 'none';
    });

    
});

