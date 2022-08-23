import {pokemonArray} from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const searchButton = document.querySelector('.search__button');
const resetButton = document.querySelector('.search__reset');
let filteredArr = [...pokemonArray];

//push initial array into the dom

const displayPokemon = (arr) => {
        arr.forEach((item) => {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'card');
        newDiv.innerHTML = `
            <img class="card__image" src="${item.sprite}" alt="Pokemon Sprite">
            <div class="card__content">
                <h2 class="card__heading">${item.name}</h2>
                <p class="card__text">
                ${item.name} (#${item.id}) is a ${item.types.length > 1 ? item.types.join(' & ') : item.types[0]} type pokemon.
                </p>
            </div>
            `
        cardContainer.appendChild(newDiv);
    })
}
displayPokemon(filteredArr);

//select how the user is searching and then filter by search entered

const searchPokemon = () => {
    cardContainer.innerHTML = "";
    let searchMethod = document.querySelector('.search__dropdown').value;
    let searchValue = document.querySelector('.search__value').value.toLowerCase();
    if(searchMethod == 'name') {
        filteredArr = pokemonArray.filter(item => item['name'] == searchValue);
    } else if(searchMethod == 'type') {
        filteredArr = pokemonArray.filter(item => item['types'].includes(searchValue));
    } else {
        filteredArr = pokemonArray.filter(item => item['id'] <= searchValue*1);
    }

    displayPokemon(filteredArr);
}

searchButton.addEventListener('click', searchPokemon);



// resets to full list

const reset = () => {
    cardContainer.innerHTML = "";

    displayPokemon(pokemonArray);
}

resetButton.addEventListener('click', reset);