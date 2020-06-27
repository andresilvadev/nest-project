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

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Build docker image

```bash
# development
$ docker-compose build
```

## Start and login to the container:

```bash
# development
$ docker-compose up -d
$ docker-compose exec nest bash
```

## Se estiver rodando no WSL2 do Windows será necessário liberar a pemissão de acesso ao arquivo entrypoint.sh

```bash
# development
$ chmod +x .docker/entrypoint.sh
```

## Se estiver rodando no WSL2 - Caso necessário converta o arquivo para um arquivo unix

```bash
# development
$ dos2unix .docker/entrypoint.sh
```

## Se estiver rodando no WSL2 - Possiveis erros, se este erro existir, certifique-se de salvar seu arquivo no formato LF e usar no inicio do arquivo.sh o (#!/bin/sh) ao invés de #!/bin/bash

```bash
# development
Starting nest-project-app ... done
Attaching to nest-project-app
nest-project-app | standard_init_linux.go:211: exec user process caused "no such file or directory"
nest-project-app exited with code 1
```


## Conectando no postgres pelo terminal bash

```bash
# development
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