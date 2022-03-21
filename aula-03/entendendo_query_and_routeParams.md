Query params:

    são os parametros que nos passamos na frente da rota
    ?nome=nodeJs

Route params:

    a gente passa na rota
    /curso/2

    geralmente é passado com :

Request Body:

    A gente manda um objeto dentro do corpo dessa requisição
    { nome: "NodeJs", tipo: "Backend" }

```javascript
const express = require("express");
const server = express();

// Query params: ?nome=NodeJs
// Route params: /curso/2
// Request Body: { nome: "NodeJs", tipo: "Backend"}

const cursos = ["NodeJs", "Javascript", "React Native"];

server.get("/curso/:index", (req, res) => {
    // const nome = req.query.nome;
    const { index } = req.params;

    return res.json({curso: `Aprendendo ${cursos[index]}`})
})

server.listen(3000);


```