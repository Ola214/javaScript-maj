const msg = 'abcd'; //można też tekst umieszczać w gravisy `` (ale lepiej jego używać do template stringa)
const quote = 'Jegomośc powiedział - "kocham schabowe"';
console.log(msg.length);
console.log(quote.toUpperCase());
const newMsg = quote.toUpperCase();
console.log(quote.toLowerCase());

const date = new Date();
console.log(date.toLocaleDateString('en'));

const username = 'maciej';
const newUsername = username.charAt(0).toUpperCase() + username.slice(1);

console.log(newUsername);

//przejrzeć metody z MDN (bez lejka i kosza)

//ZADANIE
const text1 = 'powiększ mnie!'
console.log(text1.toUpperCase());
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
console.log(text2.toLowerCase());
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
console.log(text3.slice(6));
const text4 = 'sprawdź, czy zawieram słowo "czy"'
console.log(text4.includes('czy'));
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
console.log(text5.charAt(2));
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
console.log(text6.replaceAll('pies', 'kot'));
const text7 = 'podziel, ten, string, od, przecinków'
console.log(text7.split(','));

const num1 = 23;
const num2 = '45';

console.log(num1 + num2); //68
console.log(num2 * 1); //45

const num3 = 'abcd';
console.log(num3 * 1); // NaN
console.log(0/0); // NaN

const num4 = 1351.124;
console.log(num4.toFixed()); //zaokrąglanie
console.log(num4.toFixed(2));

const num5 = '123';
console.log(parseInt(num5)); //przeistaczanie w Number, lepiej tak robić niż * 1 

const num6 = '123ijdw';
console.log(parseInt(num6)); //NaN

//BOOLEAN
let a = true;
let b = false;

if(0) {
    console.log('TRUE');// ' ', -1
} else {
    console.log('FALSE'); // 0, '', 2-2
}

//NULL & UNDEFINED
let a;
console.log(a); // UNDEFINED

let b = null;
console.log(b); // NULL

//TYPY ZŁOŻONE
const newArray = [123, 'abcv', true, ['abcd']];

const colors = ['red', 'green', 'blue'];
console.log(colors);
function test() {
    console.log('Cześć, jestem w funkcji! ');
}
test()

const person = {
    name: 'Klaudia',
    age: 23,
    favColor: null
}
console.log(person);










