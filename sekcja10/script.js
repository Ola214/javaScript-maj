// const test = () => {
//     console.log('hamburger');
// }

// test()

// // setTimeout(test, 500);

// setInterval(test, 1000);

'use strict'

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

alert('cześć');
if (confirm('Chcesz?')) {
    console.log('tak');
} else {
    console.log('nie');
}

const name = prompt('cześć, jak masz na imię?', 'Ania');
console.log(`Cześć ${name}`);

console.log(Math.PI);
console.log(Math.min(5, 10));

console.log(Math.random()); // 0 - 1
console.log(Math.random() * 10);

const number = Math.random() * 10;

console.log(Math.floor(number));

const link = document.querySelector('a');
const img = document.querySelector('img');
const p = document.querySelector('p');

link.setAttribute('href', '#');
link.setAttribute('target', '_blank');

console.log(img.getAttribute('src'));

console.log(p.hasAttribute('style'));

p.removeAttribute('style');

const divTag = document.querySelector('[data-number="23"]');
console.log(divTag.dataset.number);
console.log(divTag.dataset.moreInfo);

divTag.setAttribute('data-test', '123');


const grandpa = document.querySelector('.grandparent');
// console.log(grandpa.querySelector('.parent'));
// console.log(grandpa.querySelectorAll('.child'));

const middleChild = document.querySelector('.middle-child');
console.log(middleChild);
const prevSibling = middleChild.previousElementSibling;
console.log(prevSibling);

const nextSibling = middleChild.nextElementSibling;
console.log(nextSibling);

const parentEl = middleChild.parentElement.parentElement.parentElement;
console.log(parentEl);

console.log(middleChild.closest('.grandparent'));

console.warn('warning');
console.error('error123');

console.table(['123', 123]);

const persons = [{
        name: 'Lisa',
        age: 23
    },
    {
        name: 'Majek',
        age: undefined,
        fav: null
    }
]

console.table(persons)