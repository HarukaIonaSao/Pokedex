// Seleciona os elementos HTML
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonIdInput = document.getElementById('pokemonId');
const fetchPokemonButton = document.getElementById('fetchPokemon');

// Função para buscar Pokémon
function fetchPokemon() {
    const pokemonId = pokemonIdInput.value;
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    // Define a imagem padrão antes de começar a buscar
    pokemonImage.src = 'https://encurtador.com.br/WX2ET';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            pokemonName.textContent = `Nome: ${data.name}`;
            pokemonImage.src = data.sprites.front_default; // Atualiza com a imagem do Pokémon
            pokemonType.textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;
        })
        .catch(error => {
            pokemonName.textContent = 'Pokémon não encontrado!';
            pokemonImage.src = 'https://encurtador.com.br/WX2ET'; // Mantém a imagem padrão se não encontrado
            pokemonType.textContent = '';
        })
        .finally(() => {
            pokemonIdInput.value = '';
        });
    }

// Adiciona o evento de clique no botão
fetchPokemonButton.addEventListener('click', fetchPokemon);
 
// Adiciona o evento de keydown para o input
pokemonIdInput.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi "Enter" 
    if (event.key === 'Enter') {
        fetchPokemon();
    }});