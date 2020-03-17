// console.dir(document); 
// console.log(document.baseURI);
// console.log(document.domain);
// console.log(document.location);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'Costa';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);
// console.log(document.all[5]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images[0]);


// Get Element By ID
// let title = document.getElementById("todo-title");
// title.textContent = 'Test Title';
// title.innerText = 'Test Title 2';
// console.log(title.textContent);
// console.log(title.innerText);
// title.innerHTML = `<h3 class='todo-title'>Hello</h3>`;
// title.style.color = 'red';


// Get Elements By Class Name
// let list = document.getElementsByClassName("todo-item-li");
// console.log(list);
// console.log(list[1]);
// list[1].innerText = 'Test Item';
// list[1].style.backgroundColor = "#eee";

// Will Show Error
// list.style.backgroundColor = "#eee";

// for(let item of list) {
//     item.style.backgroundColor = "#eee";
// }


// Get Elements By Tag Name
// let list = document.getElementsByTagName("li");
// console.log(list);
// console.log(list[1]);
// list[1].innerText = 'Test Item';
// list[1].style.backgroundColor = "#eee";

// Will Show Error
// list.style.backgroundColor = "#eee";

// for(let item of list) {
//     item.style.backgroundColor = "#eee";
// }



// Query Selector 
// let title = document.querySelector(".todo-title");
// title.style.color = '#ccc';

// let input = document.querySelector('input');
// input.value = 'Test Value';

// let input = document.querySelector('input[type="text"]');
// input.value = 'Test Value';

// let list = document.querySelector('.todo-item-li');
// list.style.color = '#b4b4b4';

// let lastList = document.querySelector('.todo-item-li:last-child'); 
// lastList.style.color = '#ccc';

// let secondList = document.querySelector('.todo-item-li:nth-child(2)'); 
// secondList.style.color = 'coral';

// let oddList = document.querySelectorAll('.todo-item-li:nth-child(odd)'); 
// let evenList = document.querySelectorAll('.todo-item-li:nth-child(even)'); 

// for(let i = 0; i < oddList.length; i++) {
//     oddList[i].style.backgroundColor = '#f4f4f4';
//     evenList[i].style.backgroundColor = '#ccc';
// }
