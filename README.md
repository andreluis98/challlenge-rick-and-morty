# Rick and Morty Angular App

Este projeto é uma aplicação Angular desenvolvida para consumir a API "Rick and Morty". A aplicação permite aos usuários navegar por personagens e episódios da série, com funcionalidades de busca e paginação.

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contatos](#contatos)

## Visão Geral

A aplicação exibe informações detalhadas sobre os personagens e episódios da série "Rick and Morty". Inclui componentes para listar personagens e episódios, visualizar detalhes específicos e buscar itens por nome.

## Funcionalidades

- **Listagem de Personagens**: Exibe uma lista de personagens com suas imagens e informações básicas.
- **Detalhes do Personagem**: Exibe informações detalhadas sobre um personagem selecionado.
- **Busca de Personagens**: Permite filtrar personagens por nome.
- **Listagem de Episódios**: Exibe uma lista de episódios com informações básicas.
- **Busca de Episódios**: Permite filtrar episódios por nome.
- **Paginaçã**o: Carrega mais itens conforme o usuário rola a página para baixo.
- **Barra de Navegação**: Inclui uma barra de navegação com um campo de busca global.

## Instalação

Siga os passos abaixo para configurar e rodar a aplicação localmente:

1. **Clone o repositório**

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as dependências**

   Execute o comando abaixo para instalar todas as dependências necessárias:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   Para iniciar a aplicação em ambiente de desenvolvimento, execute:

   ```bash
   ng serve
   ```

4. **Acesse a aplicação**

   Abra o navegador e vá para `http://localhost:4200`.

## Uso

### Navegação pela Aplicação

- **Página Principal**: Acesse as abas "Characters" e "Episodes" para navegar entre os personagens e episódios.
- **Busca**: Utilize a barra de busca para filtrar personagens ou episódios por nome.
- **Detalhes do Personagem**: Clique em um personagem na lista para ver mais detalhes.

### Componentes

#### CharacterListComponent

- **Lista Personagens**: Mostra uma lista de personagens com imagem, nome, status e espécie.
- **Busca**: Filtra os personagens exibidos na lista de acordo com o termo de busca inserido.

#### CharacterDetailComponent

- **Detalhes do Personagem**: Exibe detalhes como imagem, nome, status, espécie, gênero, origem e localização atual.

#### EpisodeListComponent

- **Lista Episódios**: Mostra uma lista de episódios com nome, número e data de exibição.
- **Busca**: Filtra os episódios exibidos na lista de acordo com o termo de busca inserido.

### Serviços

#### RickAndMortyService

- **getCharacters(page: number)**: Obtém uma lista de personagens da API com suporte a paginação.
- **getCharacter(id: number)**: Obtém detalhes de um personagem específico.
- **getEpisodes(page: number)**: Obtém uma lista de episódios da API com suporte a paginação.
- **getEpisode(id: string)**: Obtém detalhes de um episódio específico.

#### SearchService

- **updateSearchTerm(term: string)**: Atualiza o termo de busca global.
- **currentSearchTerm**: Observa o termo de busca atual para sincronização entre componentes.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
src/
│
├── app/
│   ├── components/
│   │   ├── character-detail/
│   │   │   ├── character-detail.component.html
│   │   │   ├── character-detail.component.css
│   │   │   └── character-detail.component.ts
│   │   ├── character-list/
│   │   │   ├── character-list.component.html
│   │   │   ├── character-list.component.css
│   │   │   └── character-list.component.ts
│   │   ├── episode-list/
│   │   │   ├── episode-list.component.html
│   │   │   ├── episode-list.component.css
│   │   │   └── episode-list.component.ts
│   │   ├── search-bar/
│   │   │   ├── search-bar.component.html
│   │   │   ├── search-bar.component.css
│   │   │   └── search-bar.component.ts
│   ├── services/
│   │   ├── rick-and-morty.service.ts
│   │   └── search.service.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.component.ts
│   ├── app.module.ts
│
├── assets/
│   └── images/
│       ├── logo.svg
│       └── logo-min.svg
│
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
│
└── index.html
```

### Descrição dos Arquivos

- **components/**: Contém os componentes principais da aplicação (listagem e detalhes de personagens, listagem de episódios e barra de busca).
- **services/**: Contém os serviços que lidam com a comunicação com a API e a gestão do termo de busca.
- **assets/**: Contém imagens e outros recursos estáticos.
- **environments/**: Arquivos de configuração para diferentes ambientes de execução (desenvolvimento e produção).

## Tecnologias Utilizadas

- **Angular**: Framework principal para construção da interface.
- **Angular Material**: Biblioteca de componentes de interface.
- **RxJS**: Biblioteca para programação reativa, utilizada para gerenciar observáveis e assinaturas.
- **TypeScript**: Linguagem principal utilizada no projeto.
- **HTML/CSS**: Linguagens para marcação e estilização da aplicação.
- **API Rick and Morty**: Fonte de dados para personagens e episódios.

## Observação
- Para voltar pra home quando estiver em **Detalhes do Personagem** , basta clicar no icone "Rick e Morty",que a ação é realizada
