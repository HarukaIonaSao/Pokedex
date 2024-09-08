// Seleciona os elementos HTML
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonRegion = document.getElementById('pokemonRegion');
const pokemonGeneration = document.getElementById('pokemonGeneration');
const pokemonIdInput = document.getElementById('pokemonId');
const fetchPokemonButton = document.getElementById('fetchPokemon');

// Função para buscar Pokémon
function fetchPokemon(pokemonIdOrName) {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`;
    const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIdOrName}`;
    
    // Faz a primeira requisição para obter os dados básicos do Pokémon
    fetch(pokemonURL)
        .then(response => response.json())
        .then(data => {
            pokemonName.textContent = `Nome: ${data.name}`;
            pokemonImage.src = data.sprites.front_default; // Atualiza com a imagem do Pokémon
            pokemonType.textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;

            // Retira o  hidden da imagem inicial
            pokemonImage.style.visibility = 'visible';
            
            // Faz a segunda requisição para obter a espécie e dados adicionais
            return fetch(speciesURL);
        })
        .then(response => response.json())
        .then(speciesData => {
            const generation = speciesData.generation.name;
            pokemonGeneration.textContent = `Geração: ${generation}`;

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
            pokemonImage.src = 'https://encurtador.com.br/WX2ET';
            pokemonType.textContent = '';
            pokemonRegion.textContent = '';
            pokemonGeneration.textContent = '';
        })
        .finally(() => {
            pokemonIdInput.value = '';
        });
}

function normalizeLevenshtein(a, b) {
    const distance = levenshtein(a, b);
    const maxLength = Math.max(a.length, b.length);
    return distance / maxLength; // Normaliza a distância para um intervalo de 0 a 1
}


// Função para calcular a distância de Levenshtein
function levenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => []);

    for (let i = 0; i <= a.length; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= b.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Substituição
                    matrix[i][j - 1] + 1,     // Inserção
                    matrix[i - 1][j] + 1      // Exclusão
                );
            }
        }
    }
    return matrix[a.length][b.length];
}

// Função para buscar Pokémon similar
function fetchApproximatePokemon() {
    const userInput = pokemonIdInput.value.trim().toLowerCase();

    if (userInput.length === 0) {
        alert('Por favor, insira um nome de Pokémon.');
        return;
    }
    
    // Buscar a lista de todos os Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000') // Limite alto para garantir todos
        .then(response => response.json())
        .then(data => {
            const allPokemon = data.results.map(p => p.name);

            // Verificar qual Pokémon tem o nome mais próximo com base na distância de Levenshtein
            let closestPokemon = '';
            let smallestDistance = Infinity;

            allPokemon.forEach(pokemonName => {
                const distance = levenshtein(userInput, pokemonName);
                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestPokemon = pokemonName;
                }
            });

            // Se a menor distância for aceitável, buscar o Pokémon correspondente
            if (smallestDistance <= 5) { // Ajuste o limite conforme necessário
                fetchPokemon(closestPokemon);
            } else {
                alert('Nenhum Pokémon correspondente encontrado.');
            }
        })
        .catch(error => {
            alert('Erro ao buscar a lista de Pokémon.');
        });
}

// Adiciona o evento de clique no botão
fetchPokemonButton.addEventListener('click', fetchApproximatePokemon);

// Adiciona o evento de keydown para o input
pokemonIdInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        fetchApproximatePokemon();
    }
});
