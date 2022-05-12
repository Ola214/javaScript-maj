// IF, ELSE
const pass = '2u8y3edh92gd'

if(pass.length > 10 && pass.includes('!')) {
    console.log('Masz rewelacyjne haslo');
} else if (pass.length > 10) { //można mieć kilka else ifów
    console.log('Masz dobre haslo');
} else { //możemy nie mieć elsa
    console.log('Masz za krótkie hasło');
}

const color = 'blue';
if(color == 'blue') {
    if(10 > 0) {
        console.log('true true');
    } else {
        console.log('false');
    }
}
//SWITCH
const day = 'wtorek';

switch(day) {
    case 'poniedziałek':
        console.log('Dziś jest poniedziałek');
        break;
    case 'wtorek':
        console.log('Dziś jest wtorek');
        break;
    case 'środa':
        console.log('Dziś jest środa');
        break;
    case 'czwartek':
        console.log('Dziś jest czwartek');
        break;
    case 'piątek':
        console.log('Dziś jest piątek');
        break;
    default:
        console.log('Weekend!!!');
}

//OPERATOR WARUNKOWY
const x = 10;

const newX = x > 20 ? `${x} > 20` : `${x} < 20`;
console.log(nexX);

const isLoggedIn = true;

function loggedIn() {
    console.log('Użytkownik jest zalogowany!');
}
function loggedOut() {
    console.log('Użytkownik nie jest zalogowany!');
}

if(isLoggedIn) {
    loggedIn()
} else {
    loggedOut()
}

isLoggedIn ? loggedIn() : loggedOut();

// ZADANIE 1
let x = 50;
let y = 30;
if(x > y){
    console.log(`${x} > ${y}`);
}
// ZADANIE 2
let color = 'blue';
let newColor = 'green';
if(color == newColor){
    console.log('Kolory się zgadzają');
} else {
    console.log('Kolory się nie zgadzają');
}
// ZADANIE 3
x = 100;
y = 50;
if (x > y) {
    console.log('x > y');
} else if(x == y){
    console.log('x=y');
} else {
    console.log('x<y');
}
//ZADANIE 4
let promo = '20%';
switch(promo) {
    case '10%':
        console.log('Mamy dziś 10% zniżki');
        break;
    case '20%':
        console.log('Mamy dziś 20% zniżki');
        break;
    case '30%':
        console.log('Mamy dziś 30% zniżki');
        break;
    default:
        console.log(`Mamy dziś ${promo} zniżki`);
}
//ZADANIE 5
let x = 10;
let check = ((x % 2 ) == 0) ? 'x jest parzysta' : 'x jest nieparzysta';
console.log(check);
//ZADANIE 6
let x = 50;
check = (x >= 100) ? 'X > 100' : (x < 100 && x > 30) ? 'X jest średniakiem' : 'X jest mały';
console.log(check.toUpperCase());


