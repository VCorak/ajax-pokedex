

function getInputValue() {
    document.getElementById("button-addon1").addEventListener('click', () => {
        let input = +document.getElementById("input-id").value;
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                return response.json();
            })
            .then(data => {
                
            })
    })
}