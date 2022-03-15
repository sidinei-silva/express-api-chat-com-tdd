# Express API chat com Testes

## Table of Contents

- [Sobre](#about)
- [Getting Started](#getting_started)

## Sobre <a name = "about"></a>

Este projeto foi desenvolvido para a gravação do video tutorial (Desenvolvendo Chat API com Multiplas salas, usando Socket IO e Testes)

## Pré-requisitos <a name = "requirements"></a>

## Getting Started <a name = "getting_started"></a>

Estas instruções fornecerão a você uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste

### Pré-requisitos

- [Docker](https://www.docker.com/) v20.10 ou superior
- [Docker Compose](https://docs.docker.com/compose/install/) v2.2
- [NodeJS](https://nodejs.org/en/) v12 ou superior


### Installing

Uma série de exemplos passo a passo que informam como executar um ambiente de desenvolvimento.

- Clone o projeto em sua máquina.
- Instale o Docker e o Docker-Compose.
- Navegue até a raiz do projeto.
- Na raiz do projeto mude o arquivo ```.env.example``` para ```.env```
- Instale os pacotes necessários localmente com o comando:

    ```
    npm install
    ```
    ou
    ```
    yarn install
    ``` 
- Rode os containers com o comando: 
    ```
    docker-compose up --build
    ```
  Ou Rode o projeto sem docker com o comando

    ```
    yarn run dev
    ```
    ```
    npm run dev
    ```

Por fim o servidor estara no ar aguardando conexão client do socket.
