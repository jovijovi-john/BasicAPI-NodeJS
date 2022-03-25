adicionando o cors:     

    O cors do nosso projeto poderia ser adicionado la no início quando criamos a aplicação ou tanto antes de enviar para produção para podermos conectar com nosso front end

    Ele pode limitar quais domínios podem acessar a api.

    Imagine que temos esse back end mas so queremos que a api seja consumida por um determinado domínio, por exemplo google.com. Se algum outro site ou algum outro ip tentar fazer requisições, não vai conseguir

    Caso nossa api seja pública, podemos também liberar para que todos consigam acessar nossa api

Comandos:

    yarn add cors


dentro do app.js, em middlewares a gente aplica ele. Sempre como primeiro, antes de qualquer coisa.
Se passar assim: 
    this.server.use(cors());   
quer dizer que estamos liberando o acesso para nossa api, para qualquer um utilizar

para passar apenas para um domínio:

    this.server.use(cors({ origin:  }))


Agora vamos criar um novo model para reservas

Se aparecer:

    Error: SSL connect error
    provavelmente é erro causado por estar colocando https ao inves de http