// Add your code to this file
const bodyColor = document.querySelector('Body');
bodyColor.style.backgroundColor = 'rgb(0, 0, 139)'

const imageBorder = document.getElementsByClassName('pokemon_images');
for (let i = 0; i < imageBorder.length; i++) {
    imageBorder[i].style.border = 'dashed orange'
}

const bulbasaurBackground = document.getElementById('bulbasaur_container');
bulbasaurBackground.style.backgroundColor = 'rgb(56, 142, 142)'

const pokemonNames = document.getElementsByClassName('pokemon_names');
for (let i = 0; i < pokemonNames.length; i++) {
    pokemonNames[i].style.color = 'rgb(253, 238, 166)'
}

const center = document.querySelector('h2');
center.style.textAlign = 'center'