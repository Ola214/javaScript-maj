//FOR
const animals = ['pies', 'kot', 'mysz', 'królik', 'lis', 'miś'];

console.log(animals);

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}
//WHILE
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}
//DO WHILE
let i = 0;
do {
    i++;
    console.log(i);
} while (i < 2);

//FOR OF, FOR IN - przy obiektach
let numbers = [1, 2, 3, 4, 5]
for (const number of numbers){
    console.log(number * 2);
}
//ZADANIE 1
const cities = ['Białystok', 'Warszawa', 'Lublin'];
for(let i = 0; i < cities.length; i++) {
    console.log(`To miasto nazywa się ${cities[i]}`);
}
//ZADANIE 2
x = 0;
while(x < 10) {
    x += 2;
}
//ZADANIE 3
x = 20;
do {
    x -= 3;
} while( x > 0);
console.log(x);
//ZADANIE 4
numbers = [ 5, 8, 10, 23, 48, 60]
for(const number of numbers) {
    number /= 5;
    if( number % 2 == 0) {
        console.log('Liczba jest parzysta');
    } else {
        console.log('%cLiczba jest nieparzysta', 'background-color: tomato; color: black');
    }
}