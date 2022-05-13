// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }

// const newUser = {
//     name: 'Lisa',
//     age: 23,
//     car: {
//         brand: 'Audi',
//         model: 'A3',
//         color: 'czarny',
//         sound() {
//             console.log('brum brum');
//         },
//         test: '123'
//     }
// };
// // console.log(newUser.name);
// // console.log(newUser.car.brand);

// // console.log(`${newUser.name}`);

// newUser.car.sound();

// const user = {
//     name: 'Klaudia',
//     age: 23,
//     'fav-color': 'czerwony'
// }

// user.country = 'Polska'
// user['fav-color'] = 'niebieski';

// const dogName = 'Drops';
// const dogAge = 5;

// const dog = {
//     dogName,
//     dogAge
// }


// const user = {
//     name: 'Klaudia',
//     age: 23,
//     sex: 'female',
//     'hair-color': 'blonde'
// }

// for(const data in user) {
//     console.log(data + ' ' + user[data]);
// }
// const name = 123;
// const user = {
//     name: 'Lily',
//     showName() {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// user.showName();

//konstruktor
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const newUser = new User('Klaudia', 23);
// console.log(newUser);

// User.prototype.hello = function () {
//     console.log(`Cześć ${this.name}`);
// }

// User.prototype.country = 'Polska'

// console.log(newUser.country);

// newUser.hello();

// const btn1 = document.querySelector('.btn-1');
// const btn2 = document.querySelector('.btn-2');
// const btn3 = document.querySelector('.btn-3');
// const p = document.querySelector('p');

// function Food(name, price) {
//     this.name = name;
//     this.price = price;
// }

// const meal = new Food('Schabowy', 29);
// const meal2 = new Food('Pizza', 25);
// const meal3 = new Food('Zupa', 8);

// Food.prototype.showInfo = function () {
//     console.log(`${this.name} kosztuje ${this.price}zł.`)
// }

// meal.showInfo();

// btn1.addEventListener('click', () => {
//     meal.showInfo()
// });
// btn2.addEventListener('click', () => {
//     meal2.showInfo()
// });
// btn3.addEventListener('click', () => {
//     meal3.showInfo()
// });

// console.log(this);

// const person = {
//     name: 'Lisa',
//     'fav-meal': 'schabowy',
//     address: {
//         city: 'Kraków',
//         'zip-code': '00-000',
//         showCity: function () {
//             console.log(this.city);
//         }
//     }
// }

// person.address.showCity()

// function Food(name) {
//     this.name = name;
// }

// const meal = new Food('schabowy');
// const meal2 = new Food('pepsi');

// console.log(meal, meal2);

// const meal4 = {
//     name: 'schabowy'
// }

// const btns = document.querySelectorAll('button');

// btns.forEach(btn => btn.addEventListener('click', (e) => {
//     console.log(this.textContent);
//     console.log(e.target);
// }))

// const ob = {
//     number: 123,
//     showNumber() {
//         console.log(this.number);
//     },
//     showNumber2() {
//         const test = () => {
//             console.log(this.number);
//             console.log(this);
//         }
//         test()
//     }
// }
// ob.showNumber()

// function test() {
//     console.log(this);
//     console.log(this.name);
// }

// const car1 = {
//     name: 'Audi'
// }

// const car2 = {
//     name: 'Dodge'
// }

// const car3 = {
//     name: 'Nissan'
// }

// test.bind(car1)()

// const movie = {
//     title: 'Avengers'
// }

// function showMovie(price, cinema) {
//     console.log(`Film ${this.title}, cena: ${price}, kino ${cinema}`)
// }

// showMovie(30, 'SuperKINO');

// showMovie.call(movie, 35, 'superKINO2');

// const movieData = [35, 'Super2'];

// showMovie.apply(movie, {35, 'SuperKINO2'});

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHi = function() {
//     console.log(`Cześć, jestem ${this.name}!`);
// }

// Person.prototype.showAge = function() {
//     console.log(`Mam ${this.age} lat/a.`);
// }

// const person1 = new Person('Majek', 23);
// person1.sayHi();

// //
// class Person2 {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Cześć, jestem ${this.name}!`);
//     }

//     showAge = function () {
//         console.log(`Mam ${this.age} lata.`);
//     }
// }

// const person2 = new Person2('Ania', 33)
// person2.sayHi();
// person2.showAge();
// console.log(person2);

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     sound() {
//         console.log(`Zwierzak robi "hau hau".`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     test() {
//         console.log('test');
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     sound() {
//         console.log('miau');
//     }
// }

// const dog = new Dog('Drops', 6);
// const cat = new Cat('kot')
// cat.sound()
// dog.sound()
// console.log(cat);

// const user = {
//     name: 'Lily',
//     age: 23
// }
// const pet = {
//     name: 'Drops',
//     type: 'dog'
// }

// const test = {
//     name: 'test'
// }

// const userInfo = Object.assign({}, user, pet, test);
// console.log(pet);

// const userCopy = Object.assign({}, user)
// userCopy.age = 25
// console.log(userCopy);
// console.log(user);

const person = {
    name: 'Lily',
    age: 23,
    job: 'DJ',
    car: {
        brand: 'Dodge',
        model: 'Viper'
    }
}

const showInfo = ({
    job,
    name,
    age
}) => {

    // const {name: name, age, job} = person;

    console.log(`${name} pracuje jako ${job} i ma ${age} lata.`);
}

showInfo(person)

const showInfo2 = ({
    car: {
        brand,
        model
    }
}) => {
    console.log(`Jej samochód to ${brand} ${model}.`);
}

showInfo2(person)

const showInfo3 = () => {
    const {
        car: {
            brand,
            model
        }
    } = person
    console.log(`Jej samochód to ${brand} ${model}.`);
}

showInfo3()

const colors = ['red', 'green', 'blue']

const firstColor = colors[0];
const secondColor = colors[1];

const [first, second] = colors;

console.log(firstColor, secondColor);
console.log(first, second);

const [, , abcd] = colors;
console.log(abcd);