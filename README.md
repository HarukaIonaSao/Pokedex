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


## ⚠️ Tratamento de Erros

- Se o Pokémon não for encontrado, uma mensagem será exibida informando que ele não foi localizado.
- Uma imagem de erro será mostrada no lugar da imagem do Pokémon.

## 🔗 API Utilizada

- [PokeAPI](https://pokeapi.co/): A API pública usada para obter os dados dos Pokémon.

## 🤝 Contribuindo

1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature: `git checkout -b minha-feature`.
3. Faça as alterações e **commit**: `git commit -m 'feat: adiciona minha nova feature'`.
4. Envie para o **branch** original: `git push origin minha-feature`.
5. Abra um **Pull Request**.

