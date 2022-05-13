const btn = document.querySelector('button');
const img = document.querySelector('img');

const URL = 'https://dog.ceo/api/breeds/image/random'



btn.addEventListener('click', () => {
    fetch(URL).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err));
});