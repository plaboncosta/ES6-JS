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