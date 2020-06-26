FROM node:12.18.1-alpine3.11

# adicionado o bash dentro da imagem e ela vai ter um 
# usuario root e usuario node
RUN apk add --no-cache bash

# trabalhanos em /home/node/app
RUN npm config set cache /home/node/app/.npm-cache --global

# especificacao do nest dentro da imagem
# a versão do projeto tem que ser compativel com a versao do nest cli
RUN npm i -g @nestjs/cli@7.2.0

# informa o usuario que iremos utilizar
USER node

# diretorio de trabalho informado
WORKDIR /home/node/app
