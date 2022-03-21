nodemon => reload do servidor sozinho

yarn add nodemon -D

esse -D quer dizer que a biblioteca so vai ser utilizada em desenvolvimento

colocar "scripts" : {
    "dev": "nodemon"
}  no package.json

para usar:

    yarn nodemon index.js