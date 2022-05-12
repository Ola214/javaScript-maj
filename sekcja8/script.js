//Wprowadzenie do funkcji
test()

function test() {
    console.log('cześć');
}
// hoisting - wszystkie elementy są wynoszone do góry - funkcje podlegają hoistingowi

//wyrażenie funkcyjne nie podlega hoistingowi, ale lepiej używać funkcji strzałkowej
const helloWorld = function () {
    console.log('cześć! 123');
}
helloWorld();

//funkcje z argumentami
function add(parametr) {
    console.log(`Podany argument to` + parametr);
}
add('test');
//parametry podajemy podczas tworzenia funkcji
//argumenty podajemy podczasa wywołania funkcji

function add(x, y) {
    return x + y;
}
add() //undefined
add(5) // NaN

function hello(name, age) {
    console.log(`Cześć, mam na imię ${name} i mam ${age} lat.`);
}
hello('klaudia', 13);

//FUNKCJA ANONIMOWA
const heading = document.querySelector('h1')
heading.addEventListener('click', function () {
    console.log('Kliknięto mnie!');
});

function test() { //funkcja nieanonimowa
    console.log('Kliknięto mnie!')
}
heading.addEventListener('click', test);

//FUNKCJA STRZAŁKOWA
const arrowFunction = () => {
    //tak wygląda funkcja strzałkowa
}

function test(name) {
    console.log(`Mam na imię ${name}`);
}
test('Klaudia')

const test2 = (name) => {
    console.log(`Mam na imię ${name}`);
}
test2('Lisa')

const test3 = name => console.log(`Mam na imię ${name}`);
const test4 = (name, age) => {
    console.log(name, age);
}

test4('name', 123)

function add(num1, num2) {
    return num1 + num2;
}

const add2 = (num1, num2) => num1 * num2; // w 1 linijce kodu return jest automatycznie dodawany

const days = ['poniedziałek', 'wtorek', 'środa']
const days2 = days.forEach(function (day) {
    console.log(day);
})
const days3 = days.forEach(day => console.log(day));

//Domyślne parametry funkcji

const hello = (name = 'drogi użytkowniku') => {
    console.log(`Cześć ${name}, jak się masz?`);
}
hello();
hello('Klaudia');

function hello2(name = 'drogi użytkowniku') {
    console.log(`Cześć ${name}, jak się masz?`);
}
hello2();

const add = (x = 5, y = 10) => {
    console.log(x + y);
}
add(10)

//Operator REST -> spread jest w tablicach
const numbers = (x, y, ...z) => {
    console.log(x, y, z) // 13 468 [468, 4, 9813, 2, 1, 13, 3, 1]
    console.log(z.map(el => el * 2));
    console.log(x + y);
}
numbers(13, 468, 468, 4, 9813, 2, 1, 13, 3, 1)

//ZAKRESY
const name = 'Lisa'; // zakres globalny
let food;
const test = () => {
    const name = 'Lily';
    console.log(`Name w funkcji - ${name}`); //zakres lokalny Lily


    food = 'schabowy'
    console.log(food + "hamburger");

    const age = 23;
    console.log(age);

    const test2 = () => {
        food = 'pizza'
        console.log(food);

        console.log(name); //Lily, gdyby nie było Lily to byłaby Lisa
        console.log(age);

        const color = 'blue'
        console.log(color);

    }
    test2();

    const test3 = () => {
        console.log();
    }
    test3();
}
test()

console.log(age);
console.log(`Name w funkcji - ${name}`);

//forEach, callBack
const numbers2 = [0.5, 4, 'abc'];
const names = ['Lisa', 'Lily', 'Adam', 'Przemek']

numbers.forEach(num => console.log(num));