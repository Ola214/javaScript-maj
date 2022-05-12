let x = 5;
let y = 8;

const add = x + y;
console.log(add);

const subtract = x - y;
console.log(subtract);

const multiply = x * y;
console.log(multiply);

const divide = x / y;
console.log(divide);

// % ++ --

x++; // x = x + 1;
x--; //x = x - 1;

const modulo = 10 % 5; // 10 % 3 = 1 - modulo to reszta z dzielenia
console.log(0);

//OPERATORY PRZYPISANIA
const name = 'Lisa'; //przypisujemy to co jest po prawej stronie do tego co jest po lewej stronie

x = 10;
y = 5;
console.log(x);

x = x + y; // x = 10 + 5
console.log(x); // x = 15

x += y // 15 + 5 = 20
x*=y; // x = x* y
x/=y
x%=y

//OPERATORY PORÓWNANIA
console.log(10 == '10'); // true
console.log(10 === '10'); //false
console.log('10' === "10"); //true

// == porównuje zawartość
// === porównuje zawartość ORAZ typ

console.log(10 != '10'); //false
console.log(10 !== '10'); //true
console.log('10' !== "10"); //false

console.log(10 > 5); //true
console.log(10 <= 10); //true

//OPERATORY LOGICZNE
// && - i
// || - lub
// ! - zaprzeczenie

if(true && false) { // false
    console.log('plus');
} else {
    console.log('minus');
}
//if(!(10 == 10)) - false