const input = document.getElementById('input-id');
const button = document.getElementById('button-addon1');

// Pokemon abilities
const getAbility = async term => {
    const url = `https://pokeapi.co/api/v2/ability/${term}`
    const response = await fetch(url);
    const ability = await response.json();

    document.getElementById('pokemon_abilities').innerHTML = ability.effect_entries[1].effect;

}

button.addEventListener('click', () => getAbility(input.value));


// Pokemon in general
const getPokemon = async term => {
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`
    const response = await fetch(url);
    const pokemon = await response.json();

    document.getElementById('image').setAttribute('src', pokemon.sprites.other.dream_world.front_default )
    document.getElementById('pokemon_name').innerHTML = pokemon.name.toUpperCase();
    document.getElementById('pokemon_id').innerHTML = `ID: ${pokemon.id}`;
    document.getElementById('pokemon_moves').innerHTML = 'MOVES: '
        + pokemon.moves[0].move.name + ', '
        + pokemon.moves[1].move.name + ', '
        + pokemon.moves[2].move.name + ', '
        + pokemon.moves[3].move.name;
    document.getElementById('pokemon_type').innerHTML = 'TYPE: ' + pokemon.types.map((type) => type.type.name).join(', ');
}

button.addEventListener('click', () => getPokemon(input.value));

// Pokemon evolution
const getPokemonEvo = async term => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${term}`
    const response = await fetch(url);
    const pokemonEvo = await response.json();

    document.getElementById('pokemon_evolution').innerHTML = 'EVOLUTION: ' + pokemonEvo.evolves_from_species.name;

}
button.addEventListener('click', () => getPokemonEvo(input.value));