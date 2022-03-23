vamos trabalhar com a estrutura MVC

    Vamos criar dentro do src a pasta models. O model representa uma tabela no banco, o schema da nossa aplicação.

    Como, no nosso caso, a nossa api é rest e não restfull, nao vamos criar a view. No caso ela vai ser feita com   react, angular, vue, essas coisas.

    Agora vamos criar a pasta controllers. Os controllers servem para tratar a requisição e devolver uma resposta para nossa rota


    => Geralmente quando criamos um model, a primeira letra sempre é em maiúsculo e sempre singular
    https://prnt.sc/h6FGq7Er6Q6t


    e agora, qual o nome do nossso controller? UserController?
        Não, teria esse nome caso fizéssemos um update no profile, nome, telefone, essas coisas.

        Vamos fazer um session controller, para fazer uma sessão (login, logout) 

  
        // Métodos que podemos ter num controller: index, show, update, store, destroy
            /*
                *   index: listagem de sessões
                *   store: criar uma nova sessão (criar um novo login) 
                *   show: listar uma ÚNICA sessão
                *   update: alterar uma sessão (atualizar os dados de um perfil do usuário)
                *   destroy: quando queremos deletar uma sessão (excluir um usuário)
            */
    
    Como que eu faço para utilizar esse método store? Vamos lá nas nossas rotas...

    Como vamos fazer um login, nao usaremos o método get mas sim o método post.

    {
        "email": "demo@demo.com",
        "_id": "623a88c4ab3e27dd60e72f84",
        "__v": 0
    }

    _id é um campo identificador único dessa tabela
    --v é a quantidade de vezes que atualizamos esse registro

    agora vamos fazer uma verificação vendo se esse usuário já existe. Se ele já existe então não vou criar um usuário novo, só vou devolver esse usuário. Caso contrário, criaremos um novo usuário pra ele