const input = document.getElementById('input-id');
const button = document.getElementById('button-addon1');

const getPokemon = async term => {
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`
    const response = await fetch(url);


    const pokemon = await response.json();

    console.log(pokemon);

    document.getElementById('image').setAttribute('src', pokemon.sprites.other.dream_world.front_default )
    document.getElementById('pokemon_name').innerHTML = pokemon.name.toUpperCase();
    document.getElementById('pokemon_id').innerHTML = `ID: ${pokemon.id}`;
    document.getElementById('pokemon_moves').innerHTML = "";
    document.getElementById('pokemon_type').innerHTML = 'TYPE: ' + pokemon.types.map((type) => type.type.name).join(', ');
}

button.addEventListener('click', () => getPokemon(input.value));
