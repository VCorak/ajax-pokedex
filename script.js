const input = +document.getElementById('input-id') || document.getElementById('input-id');
const button = document.getElementById('button-addon1');

const getPokemon = async term => {
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon);
}


button.addEventListener('click', () => getPokemon(input.value));


