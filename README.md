<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
Como iniciar o projeto NestJS com Docker

## Instalação
- Necessário criar um volume do PosgreSQL
```bash
$ docker volume create --name=nestjs-pgdata
```

## Execute o projeto com o Docker
```bash
# roda a aplicação em ambiente dev
$ docker-compose up
```

## Acessando o banco pelo browser
* No windos basta apenas acessar o banco pelo pgadmin criar um novo serve e passar os parametros de conexão
* Acesse http://localhost:8080/browser/ para acessar o painel do PgAdmin

## Acessando a aplicação pelo browser
* No windos basta apenas acessar o banco pelo pgadmin criar um novo serve e passar os parametros de conexão

* Acesse http://localhost:3000 para acessar o Nest.js


## Outras considerações
```bash
# roda a aplicação em background
$ docker-compose up -d

# acessando o bash da aplicação
$ docker-compose exec nest bash

# roda a aplicação gerando o build
$ docker-compose --build
```

## Se estiver rodando no WSL2 do Windows será necessário liberar a pemissão de acesso ao arquivo entrypoint.sh

```bash
# libera acesso ao arquivo em ambiente unix
$ chmod +x .docker/entrypoint.sh
```

## Se estiver rodando no WSL2 - Caso necessário converta o arquivo para um arquivo unix

```bash
# converte o arquivo para ambiente unix
$ dos2unix .docker/entrypoint.sh
```

## Se estiver rodando no WSL2 - Possíveis erros como referente abaixo podem existir
```bash
# erro no terminal bash
Starting nest-project-app ... done
Attaching to nest-project-app
nest-project-app | standard_init_linux.go:211: exec user process caused "no such file or directory"
nest-project-app exited with code 1
```
* Para resolver este problema precisamos nos certifique-se de salvar seu arquivo no formato LF
* Usar no inicio do arquivo.sh o #!/bin/sh ao invés de #!/bin/bash
```bash
#!/bin/sh
cd /home/node/app
npm install
npm run start:dev
```

## Conectando no postgres pelo terminal bash

```bash
# terminal bash
$ cd /home/andre/projects/nest-project
$ docker-compose run postgres bash
$ psql --host=postgres --username=postgres --dbname=nestjs_db
Password for user postgres: postgres
psql (12.3 (Debian 12.3-1.pgdg100+1))
Type "help" for help.
nestjs_db=#

$ \d # verify table does already not exist
Did not find any relations.
```


