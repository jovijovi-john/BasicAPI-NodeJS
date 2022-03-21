por padrão o express nao vai entender json, para isso use

server.use(expres.json())


O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

```javascript
//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]
```

```javascript
const express = require("express");
const server = express();

// Query params: ?nome=NodeJs
// Route params: /curso/2
// Request Body: { nome: "NodeJs", tipo: "Backend"}

const cursos = ["Python", "NodeJs", "Javascript", "React Native"];

server.use(express.json())

// get

server.get("/cursos", (req, res) => {
    return res.json(cursos)
});


server.get("/cursos/:index", (req, res) => {
    // const nome = req.query.nome;
    const { index } = req.params;

    return res.json({curso: `Aprendendo ${cursos[index]}`})
})


// post (Criando um novo curso)

server.post("/cursos", (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
})

// put (Atualizando um curso)

server.put("/cursos/:index", (req, res) => {

    // indice do curso (qual curso ´´e)
    const { index } = req.params;
    // novo nome para o curso 
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos) 
})

// Excluindo algum curso

server.delete("/cursos/:index", (req, res) => {
    const { index } = req.params;


    cursos.splice(index, 1);

    return res.json("Curso deletado com sucesso!")
})



server.listen(3000);


```