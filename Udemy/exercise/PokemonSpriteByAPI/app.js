//출처 : https://github.com/PokeAPI 

const container = document.querySelector('#container');
const baseURL = 'https://github.com/PokeAPI/sprites/tree/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/'

for (let i =1; i<=151; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    newImg.style.width = '100%';
    newImg.style.height = '100%';
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}