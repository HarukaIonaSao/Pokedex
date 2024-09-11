# 🗃️ Pokédex JavaScript Vanilla

Este projeto é uma Pokédex interativa criada com **JavaScript Vanilla**. Utilize a PokeAPI para buscar informações sobre qualquer Pokémon pelo nome ou ID! 🔍

## 🚀 Funcionalidades

- 🔎 **Busca por Nome ou ID**: Digite o nome ou ID de um Pokémon para visualizar suas informações.
- 🧩 **Sugestão de Nome Similar**: Se você errar o nome do Pokémon, o algoritmo de Levenshtein sugere o nome mais próximo.
- 🌍 **Exibição de Geração e Região**: Além das informações básicas, a Pokédex exibe a geração e a região do Pokémon.
- 📜 **Suporte a Informações Detalhadas**: Nome, tipo, geração, e região são exibidos de forma clara no card.

## 📦 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/pokedex-js-vanilla.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd pokedex-js-vanilla
    ```

3. Abra o arquivo `index.html` no navegador para rodar a aplicação.

## 🛠️ Como Usar

1. Insira o **nome** ou **ID** de um Pokémon no campo de busca.
2. Clique no botão **Buscar** ou pressione **Enter**.
3. Veja as informações detalhadas do Pokémon aparecerem, incluindo:
   - 🏷️ **Nome**
   - 🎨 **Tipo**
   - 📆 **Geração**
   - 🌍 **Região**
   
4. Se o nome do Pokémon estiver incorreto, a aplicação tentará sugerir o nome mais próximo.

## 🖼️ Exemplo

Veja abaixo como a interface exibe as informações de um Pokémon:

Name: bulbasaur Type: grass, poison Generation: generation-i Region: kanto

## ✅ Validações de Campo e de Busca

O projeto implementa várias validações e verificações para garantir que a experiência do usuário seja fluida e que as buscas por Pokémon funcionem corretamente.

### 🔤 Validação de Entrada de Texto

1. **Entrada Vazia**:
   - Caso o usuário tente realizar uma busca sem digitar nada no campo de busca, o sistema exibe um alerta para que ele insira um nome ou ID de Pokémon antes de continuar.
   - Isso evita requisições desnecessárias à API.

2. **Entrada Numérica ou Texto**:
   - O campo de busca aceita tanto o **ID** (um número) quanto o **nome** do Pokémon.
   - Se o usuário digitar um número, a busca é feita diretamente pelo ID do Pokémon.
   - Se o nome for inserido incorretamente, a aplicação tenta encontrar o nome mais próximo, utilizando o algoritmo de Levenshtein.

### 🔍 Algoritmo de Similaridade de Nomes (Levenshtein)

- Caso o usuário digite um nome de Pokémon com erros ou parcial, o sistema utiliza o **algoritmo de Levenshtein** para calcular a distância entre o nome digitado e todos os nomes de Pokémon disponíveis.
- O sistema então escolhe o Pokémon com o nome mais próximo baseado nessa distância.
- Se a similaridade for aceitável (distância menor ou igual a 5), o Pokémon encontrado será exibido. Caso contrário, uma mensagem de erro é exibida, informando que nenhum Pokémon correspondente foi encontrado.

#### Exemplo:
- **Entrada do usuário**: `charmader` (erro de digitação)
- **Pokémon sugerido**: `charmander` (nome correto sugerido)

### ⚠️ Tratamento de Erros

1. **Pokémon não encontrado**:
   - Se o nome ou ID fornecido não corresponder a nenhum Pokémon na base de dados da PokeAPI, uma mensagem de erro aparecerá no card do Pokémon:
     ```
     Pokémon não encontrado!
     ```
   - Uma imagem de erro será exibida para indicar visualmente que o Pokémon não foi localizado.

2. **Erro na Requisição à API**:
   - Caso ocorra algum problema na comunicação com a PokeAPI, como falhas de rede, o sistema exibirá um alerta informando o erro.

3. **Reset de Campo**:
   - Após a conclusão de uma busca (bem-sucedida ou não), o campo de busca é limpo automaticamente para permitir que o usuário faça uma nova pesquisa facilmente.

### 🔄 Comportamento da Interface

- Todos os elementos de exibição, como o nome do Pokémon, tipo, geração e região, ficam ocultos até que uma busca válida seja realizada.
- Ao realizar uma busca bem-sucedida, os dados do Pokémon são exibidos de forma clara, e a imagem do Pokémon é carregada corretamente.
- O campo de **ID ou nome** é redefinido após cada busca para que o usuário possa começar uma nova pesquisa sem precisar apagar manualmente o conteúdo.

Com essas validações e tratamentos, a aplicação se torna mais robusta, amigável e menos propensa a falhas durante o uso.

## 🔗 API Utilizada

- [PokeAPI](https://pokeapi.co/): A API pública usada para obter os dados dos Pokémon.

## 🤝 Contribuindo

1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature: `git checkout -b minha-feature`.
3. Faça as alterações e **commit**: `git commit -m 'feat: adiciona minha nova feature'`.
4. Envie para o **branch** original: `git push origin minha-feature`.
5. Abra um **Pull Request**.

