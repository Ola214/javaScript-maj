const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;

const numbers = [1, 2, 3, 4, 5, 6]

const arr = [true, 123, 'abcd', ['nowa tablica', 0]];

const btns= document.querySelector('button')

function btnMsg(e) {
    console.log(`kliknięto ${e.target.textContent} !`);
}

btns.forEach(btn => btn.addEventListener('click', btnMsg));

// unshift, shift, push, pop
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.unshift(-1, 100); //dodanie na początku tablicy -1 i 100
console.log(numbers); // -1, 100 , 1, 2, 3, 4, 5

numbers.shift(); // usnięcie pierwszego elementu
console.log(numbers); // 100, 1, 2, 3, 4, 5

const colors = ['red', 'green', 'blue']
console.log(colors);

colors.push('gold', 123); //dodaje elementy na koniec tablicy
console.log(colors); // red, green, blue, gold, 123

colors.pop(); //zdejmuje element z końca
console.log(colors); // red, green, blue, gold

//map, concat, spread, rest operator
const numbers = [1, 2, 3, 4, 5];
function multiply(x) {
    return x * 2;
}
const newNumber = numbers.map(multiply); //map zwraca nam nową tablicę
console.log(numbers); // 1 2 3 4 5
console.log(newNumbers); // 2 4 6 8 10

//push - metoda destrukcyjna - zmienia strukturę projektu
console.log(numbers); // [1,2,3,4,5] po rozwinięciu ma 1,2,3,4,5,6,7,8
numbers.push(6, 7, 8);

const abc = ['a', 'b', 'c'];
const newAbc = numbers.concat(abc); // albo np. numbers.concat(6,7,8, true, abc)
console.log(newAbc); //1,2,3,4,5,6,7,8,a,b,c

// ... -> spread (tablice), rest(funkcje) operator 
console.log(abc); // ["a", "b", "c"]
console.log(...abc); //a b c

const drinks = ['pepsi', 'kawa', 'sok'];
const meals = ['schabowy', 'spaghetti', 'zupa'];

const menu = [...drinks,...meals];
console.log(menu); // ["pepsi", "kawa", "sok", "schabowy", "spaghetti", "zupa"]

const menu2 = drinks.concat(meals);

//slice - metoda niedestrukcyjna, splice - metoda destrukcyjna
const numbers = [0, 0, 1, 1, 2, 2 ,2];
const colors = ['red', 'green', 'blue', true, 123];
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', 'człowiek', 'oczy'];

const numbers2 = numbers.slice(0,2);
console.log(numbers2); // [0, 0]

const numbers3 = numbers.slice(-3);
console.log(numbers3); // [2, 2, 2]

const randomStuff = colors.splice(-2); 
console.log(colors); // ["red", "green", "blue"]
console.log(randomStuff); // [true, 123]

const newCars = cars.splice(2,4,'test');
console.log(cars); // [123, true, "test", "człowiek", "oczy"]
console.log(newCars); // ["audi", "bmw", "mercedes", "ferrari"]

//pozostałe metody

const numbers = [0, 23, 48, 175, 2, 34, 11];

function number(x) {
    return x % 2 === 0;
}
console.log(numbers.filter(number)); // [0, 48, 2, 34]

numbers.forEach(num => console.log(num * 5));

console.log(numbers.includes('0'));// false bo mamy 0 jako number nie string

console.log(numbers.indexOf(10)); // indeks jakiegoś elementu, jak nie ma to -1

//map vs forEach
const numbers = [0, 1, 2, 3];
const newNumbers = numbers.forEach(number => console.log(number * 2)); // 0 2 4 6
console.log(newNumbers); //undefined, bo forEach nie ma returna

const mapNumbers = numbers.map(number => number * 2);
console.log(mapNumbers); // [0 2 4 6]

//zadanie1
const letters = ['c', 'd'];
letters.unshift('a', 'b');
letters.push('e', 'f');
console.log(newLetters);
console.log(newLetters.includes('c'));

//zadanie2
const numbers = [1, 2, 3];
const food = ['hamburger', 'french fries', 'pizza'];
const newArray = [...numbers, ...food];
console.log(newArray);

//zadanie3
const numbers = [1, 5, 13, 26, 48];
const newNumbers = numbers.map(number => number * 5);
console.log(newNumbers);
for(const number of newNumbers) {
    if(number %2 === 0) {
        console.log(`Liczba parzysta: ${number}`);
    } else {
        console.log(`Liczba nieparzysta: ${number}`);
    }
}

//zadanie4
const colors = ['zielony'];
colors.unshift('niebieski');
colors.push('czerwony');
for( let i = 0; i < colors.length; i++) {
    console.log(`Mój ulubiony kolor to: ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`);
}

//zadanie5
let cars = "Audi, Mercedes, BMW, Nissan, Dodge";
const carsArr = cars.split(', ');
carsArr.length > 3 ? console.log('Jest Ok') : console.log('Nie jest ok');

if(carsArr.includes('Audi')) {
    carsArr.push('Lamborgini')
} else {
    carsArr.pop()
}
console.log(carsArr);






