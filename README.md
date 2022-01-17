# Teste MGN

## Dependências
- Docker 
- Node
- Postgres

## Desenvolvimento
O desenvolvimento de cada projeto é separado por sua responsabilidade.

### Backend
Entrar no diretório **backend/** e rodar o comando:

```shell
> DATABASE=database npm start
```

> Variável de ambiente DATABASE com o valor apontando para o banco de dados.

### Frontend
Entrar no diretório **frontend/** e rodar o comando:

```shell
> npm start
```

## Docker
### Rodar o projeto no docker
Para rodar o projeto no docker, será necessário executar o seguinte comando:

```shell
> docker-compose up -d --build
```

após a sua execução, será necessário entrar no diretório **frontend/** e executar o comando:
```shell
> npm start
```