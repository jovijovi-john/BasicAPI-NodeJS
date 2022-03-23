nodemon => reload do servidor sozinho

yarn add nodemon -D

esse -D quer dizer que a biblioteca so vai ser utilizada em desenvolvimento

colocar "scripts" : {
    "dev": "nodemon"
}  no package.json

para usar:

    yarn nodemon index.js


Para que possamos utilizar aquela sintaxe de import, devemos instalar o sucrase:

    yarn add sucrase

=> para usar o nodemon e sucrase juntos:

    "scripts": {
        "dev": "nodemon src/server.js"
    }

    e na raiz do projeto adicionar um nodemon.json:

        {
            "execMap": {
                "js": "node -r sucrase/register"
            }
        }
    
    vai procurar todos os arquivos js, vai no modulo de sucrase e achar o register e fazer pra gente:
    https://prnt.sc/6MK5J9aMn84l

    yarn add mongoose => para poder usar o mongo