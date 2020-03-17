"user strict";

// Imediately Resolved 
let myPromise = Promise.resolve({
    name: 'Plabon',
    age: 21,
    profession: 'Software Dev',
    friends: ['Ashik', 'Niren', 'Pranto']
});
// let myPromise = Promise.reject({msg: 'Error Occured!'});

// myPromise.then(res => console.log(res));
// myPromise.catch(err => console.log(err));

let getPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 2000);
});

// getPromise.then(res => console.log(res + 1));

const getData = (method, url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(this.status >= 200 && this.status < 300) resolve(xhr.response);
            else reject({status: this.status, statusText: xhr.statusText});
        };
        xhr.onerror = function(){
            reject({status: this.status, statusText: xhr.statusText});
        } 
        xhr.send();
    });
};

getData('GET', 'https://jsonplaceholder.typicode.com/posts')
.then(res => {
    // let posts = JSON.parse(res);
    // let lists = '';
    // posts.forEach((post, index) => {
    //     lists += `
    //         <li class="list">${index + 1}. ${post.title}</li>
    //     `;
    // });
    // for(let post of posts) {
    //     console.log(post);
    // }
    // document.getElementById('set-list').innerHTML = lists;
    // document.getElementById('set-list-total').innerHTML = `(${posts.length})`;
})
.catch(err => console.log(err));



let posts = [
    {title: 'First Post', body: 'This is post one'},
    {title: 'Second Post', body: 'This is post two'}
];


function getPost() {
    setTimeout(() => {
        let output = ''; 
        posts.forEach((item, index) => {
            output += `<li class='list'>${index + 1}. ${item.title}</li>`;
        });
        document.getElementById('set-list').innerHTML = output;
    }, 1000);
}

// getPost();

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) resolve();
            else reject({msg: 'Something went wrong!'});
        }, 2000);
    });
}

// createPost({title: 'Third Post', body: 'This is post three'})
// .then(() => getPost())
// .catch(err => console.log(err));

// Promise All
const promise1 = Promise.resolve('Hello Costa');
const promise2 = `Age ${21}`;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Good Bye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => console.log(values));

getPost();

// Async Await
async function init() {
    await createPost({title: 'Third Post', body: 'This is post three'});
    getPost();
}
init();

async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
}

fetchData('https://jsonplaceholder.typicode.com/users');

