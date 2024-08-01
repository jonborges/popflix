# PopFlix

PopFlix é um site dedicado a trazer as músicas mais tocadas dos anos 2000, 2009, 2010 e 2020. O site permite aos usuários pesquisar músicas específicas e favoritar as suas favoritas. Este projeto foi desenvolvido utilizando React e conta com um arquivo JSON para adicionar as músicas.

## Funcionalidades

- **Exploração por Ano**: Navegue pelas músicas mais tocadas dos anos 2000, 2009, 2010 e 2020.
- **Pesquisa**: Pesquise por músicas ou artistas específicos usando a barra de pesquisa.
- **Favoritos**: Adicione músicas aos seus favoritos para fácil acesso posterior.
- **Integração com JSON**: As músicas são gerenciadas e adicionadas através de um arquivo JSON.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React Router**: Para navegação entre páginas.
- **CSS Modules**: Para estilização dos componentes.

## Estrutura do Projeto

- **src**
  - **components**: Contém os componentes React utilizados no projeto.
  - **data**
     Arquivo JSON contendo as músicas
  - **pages**
    - `Home.js`: Página inicial listando todas as músicas.
    - `Favorites.js`: Página para exibir as músicas favoritedas.
  - **App.js**

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/popflix.git

2. Navegue até o diretório do projeto:
3. ```bash
cd popflix

4. Instale as dependências:
5. ```bash
npm install

6. Inicie o servidor de desenvolvimento:
7. ```bash
npm start

### Adicionando Novas Músicas
Para adicionar novas músicas, edite o arquivo songs.json localizado na pasta src/data. Cada música deve ser adicionada no seguinte formato:
