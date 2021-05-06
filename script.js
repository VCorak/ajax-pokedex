const getRandomPoke = (min, max) => {
    return Math.floor(Math.random() * (max-min)) + min;
}

console.log(getRandomPoke(1, 1118))

function getInputValue() {
    document.getElementById("button-addon1").addEventListener('click', () => {
        let input = +document.getElementById("input-id").value || document.getElementById("input-id").value;
        fetchPokemon();
        console.log(input);
    })}
getInputValue();

        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/150')
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }


