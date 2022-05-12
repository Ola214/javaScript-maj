// console.log(window);
// window.console.log('cześć');

// const test = document.getElementById('item');

// console.log(test);

// const test2 = document.getElementsByTagName('ul');
// console.log(test2);

// const test3 = document.getElementsByClassName('test');
// console.log(test3);

// const test = document.querySelector('ul li');
// console.log(test);

// const ulList = document.querySelector('ul');
// console.log(ulList);

// const liItem = ulList.querySelector('li:nth-child(2)');
// console.log(liItem);

// const liItems = document.querySelectorAll('li.test');
// console.log(liItems);

// // querySelector nie wspiera żywych kolekcji, tylko getElementyByTag / ClassName

// const newLi = document.createElement('li');
// ulList.appendChild(newLi).textContent = 'oczy';

// console.log(liItems.length); //5
// console.log(test2.length); //6

// const ulList = document.createElement('ul');
// const liItem = document.createElement('li');
// liItem.textContent = 'cześć';

// document.body.appendChild(ulList);
// ulList.appendChild(liItem);

// const div = document.querySelector('div');
// const p123 = document.querySelector('p');
// div.appendChild(p123);

// const div = document.querySelector('div');
// const p = document.createElement('p');
// const headingTwo = document.createElement('h2');

// // div.appendChild(p);
// // div.appendChild(headingTwo);

// div.append(p, headingTwo, 'cześć');

// const btn = document.querySelector('button');

// // console.log(btn.outerHTML);
// // btn.outerHTML = '123';

// // btn.innerHTML = '';
// // document.body.innerHTML = '';

// btn.innerHTML = '<li>123</li>';
// console.log(btn.textContent);

// btn.textContent = 'abcd';
// btn.innerText = 'abcd';

// const innerT = document.querySelector('.inner-text');
// const textC = document.querySelector('.text-content');
// console.log(innerT.innerText);
// console.log(textC.textContent);


// const input = document.querySelector('input');
// const underInput = document.querySelector('.under-input');

// input.addEventListener('keydown', e => {
//     if (e.key === 'Enter') {

//         underInput.innerHTML = input.value;
//         underInput.textContent = input.value;
//     }
// });

// const div = document.querySelector('div');
// const p123 = document.querySelector('p');

// // removeChild

// div.removeChild(p123);
// document.body.removeChild(div);

// p123.remove();
// div.remove();

// const btn1 = document.querySelector('.btn-1');
// const btn2 = document.querySelector('.btn-2');
// const btn3 = document.querySelector('.btn-3');

// btn1.addEventListener('click', function () {
//     console.log('Kliknięto mnie!');
// });

// btn2.addEventListener('mouseover', () => console.log('najechano na mnie'));

// btn3.addEventListener('dblclick', test);

// btn3.addEventListener('click', test);

// const test = () => {
//     console.log('double click');
// }

// const btns = document.querySelectorAll('button');
// console.log(btns);

// const smile = () => {
//     console.log('smile');
// }

// // btns.addEventListener('click', smile);

// btns.forEach(btn => btn.addEventListener('click', smile));

// const btn = document.querySelector('button');

// const test = (e) => {
//     console.log(e.target);
//     console.log(e.target.classList);
//     console.log(e.target.offsetTop);
// }
// btn.addEventListener('click', test);

// const lime = document.querySelector('.lime');
// const blue = document.querySelector('.blue');
// const gold = document.querySelector('.gold');

// // const infoLime = () => {
// //     console.log('%clime', 'color: lime; text-transform: uppercase');
// // }

// const infoBlue = () => {

//     console.log('%cblue', 'color: royalblue; text-transform: uppercase');
// }

// const infoGold = () => {
//     // e.stopPropagation();
//     console.log('%cgold', 'color: gold; text-transform: uppercase');
// }

// // lime.addEventListener('click', infoLime);
// blue.addEventListener('click', infoBlue);
// gold.addEventListener('click', infoGold);


// const allCircles = document.getElementsByClassName('circle');
// const allCircles = document.querySelectorAll('.circle');
// const gold = document.querySelector('.gold');
// const lime = document.querySelector('.lime');



// const newCircle = document.createElement('div');
// newCircle.classList.add('circle', 'purple');
// gold.append(newCircle);


// // allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)));

// // console.log(allCircles.length);

// lime.addEventListener('click', () => {
//     if (e.target.classList.contains('circle2')) {
//         console.log(e.target);
//     }

// });

// const addBtn = document.querySelector('.add');
// const removeBtn = document.querySelector('.remove');
// const toggleBtn = document.querySelector('.toggle');
// const text = document.querySelector('p');

// const addClass = () => {
//     text.classList.add('test')
// }

// const removeClass = () => {
//     text.classList.remove('test');
// }

// const toggleClass = () => {
//     text.classList.toggle('test');
// }
// addBtn.addEventListener('click', addClass);
// removeBtn.addEventListener('click', removeClass);
// toggleBtn.addEventListener('click', toggleClass);

// const ulList = document.createElement('ul');
// document.body.append(ulList);
// const number = 10;

// for (let i = 1; i <= number; i++) {
//     const liItem = document.createElement("li");
//     liItem.textContent = i;
//     ulList.append(liItem);
// }

// const lastLi = ulList.querySelector('li:last-child');
// console.log(lastLi);
// lastLi.textContent = "Jestem ostatnim elementem.";

// lastLi.style.backgroundColor = 'royalblue';
// lastLi.style.padding = '20px 40px';
// lastLi.style.fontSize = '48px';

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const square = document.querySelector('.square');

const fun1 = () => {
    console.log('cześć');
}

const fun2 = () => {
    square.style.background = 'tomato'
}

const fun3 = () => {
    square.style.background = 'royalblue'
}

const fun4 = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')

    // if(p1.classList.contains('show') ) {
    //     p1.classList.remove('show');
    //     p2.classList.add('show')
    // } else {
    //     p1.classList.add('show');
    //     p2.classList.remove('show');
    // }
}

btn1.addEventListener('dblclick', fun1);
square.addEventListener('mouseenter', fun2);
square.addEventListener('mouseleave', fun3);
btn2.addEventListener('click', fun4);