const express = require("express");
const server = express();

// Query params: ?nome=NodeJs
// Route params: /curso/2
// Request Body: { nome: "NodeJs", tipo: "Backend"}

const cursos = ["Python", "NodeJs", "Javascript", "React Native"];

server.get("/curso/:index", (req, res) => {
    // const nome = req.query.nome;
    const { index } = req.params;

    return res.json({curso: `Aprendendo ${cursos[index]}`})
})

server.listen(3000);

