todo tipo de função que está entre o pedido da requisição entre a resposta final

```javascript
server.post("/cursos", (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
})
```
essa função acima, (req, res) => {} é um middleware

=> tem um middleware global que é chamado independente da rota

Exemplo de middleware global:

```javascript
server.use((req, res) => {
    console.log("REQUISIÇÃO CHAMADA");
})
```

so que nesse caso, qualquer requisição que eu fizer, esse middleware vai atrapalhar, ele vai executar mas vai ficar rodando infinitamente. Para resolver isso, receba como parâmetro um next, e retorne sua instância. Assim ele vai seguir o fluxo.

```javascript
server.use((req, res, next) => {
    console.log("REQUISIÇÃO CHAMADA");
    return next()
})
```

para chamar um middleware sempre que entrar numa rota:

```javascript
// middleware que verifica se está vindo um name no body das requisições post
function checkCurso(req, res, next){

    // se não tiver a propridade name
    if(!req.body.name){
        return res.status(400).json({error: "Nome do curso é obrigatório"})
    }

    return next();
}

// post (Criando um novo curso)

server.post("/cursos", checkCurso, (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
})
```

=> podemos usar mais de um middleware como "listener"
=> podemos manipular req e res com os middlewares

```javascript
const express = require("express");
const server = express();

server.use(express.json())

// Query params: ?nome=NodeJs
// Route params: /curso/2
// Request Body: { nome: "NodeJs", tipo: "Backend"}

const cursos = ["Python", "NodeJs", "Javascript", "React Native"];

// Middleware global
server.use((req, res, next) => {
    console.log(`URL CHAMADA: ${req.url}`);

    return next();
})

// middleware que verifica se está vindo um name no body das requisições post
function checkCurso(req, res, next){

    // se não tiver a propridade name
    if(!req.body.name){
        return res.status(400).json({error: "Nome do curso é obrigatório"})
    }


    return next();
}

function checkIndexCurso(req, res, next) {
    
    // está verificando se o curso está naquele array
    const curso = cursos[req.params.index];
    
    if(!curso) {
        return res.status(400).json({error: "O curso não existe"})
    }

    req.curso = curso;

    return next()
}

// get

server.get("/cursos", (req, res) => {
    return res.json(cursos)
});


server.get("/cursos/:index", checkIndexCurso, (req, res) => {
    // const nome = req.query.nome;
    const { index } = req.params;

    // return res.json({curso: `Aprendendo ${cursos[index]}`})
    return res.json(req.curso)
})


// post (Criando um novo curso)

server.post("/cursos", checkCurso, (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
})

// put (Atualizando um curso)

server.put("/cursos/:index", checkCurso, checkIndexCurso, (req, res) => {

    // indice do curso (qual curso ´´e)
    const { index } = req.params;
    // novo nome para o curso 
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos) 
})

// Excluindo algum curso

server.delete("/cursos/:index", checkIndexCurso, (req, res) => {
    const { index } = req.params;


    cursos.splice(index, 1);

    return res.json("Curso deletado com sucesso!")
})



server.listen(3000);


```