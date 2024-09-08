const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonRegion = document.getElementById('pokemonRegion'); // Adicione um elemento para exibir a região
const pokemonGeneration = document.getElementById('pokemonGeneration'); // Adicione um elemento para exibir a geração
const pokemonIdInput = document.getElementById('pokemonId');
const fetchPokemonButton = document.getElementById('fetchPokemon');

// Função para buscar Pokémon
function fetchPokemon() {
    const pokemonId = pokemonIdInput.value;
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            pokemonName.textContent = `Nome: ${data.name}`;
            pokemonImage.src = data.sprites.front_default; // Atualiza com a imagem do Pokémon
            pokemonType.textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;
        
            return fetch(speciesURL);
        })
        .then(response => response.json())
        .then(speciesData => {
            // Obtém a geração da espécie
            const generation = speciesData.generation.name;
            pokemonGeneration.textcontent = `Geração: ${generation}`;

            const generationURL = speciesData.generation.url;
            return fetch(generationURL);
        })
        .then(response => response.json())
        .then(generationData => {

            const region = generationData.main_region.name;
            pokemonRegion.textContent = `Região: ${region}`;
        })
        .catch(error => {
            pokemonName.textContent = 'Pokémon não encontrado!';
            pokemonImage.src = 'https://encurtador.com.br/WX2ET'; // Mantém a imagem padrão se não encontrado
            pokemonType.textContent = '';
            pokemonRegion.textContent = '';
            pokemonGeneration.textContent = '';
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