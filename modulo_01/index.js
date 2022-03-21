const express = require("express");
const server = express();

// Query params: ?nome=NodeJs
// Route params: /curso/2
// Request Body: { nome: "NodeJs", tipo: "Backend"}

server.get("/curso/:id", (req, res) => {
    // const nome = req.query.nome;
    const id = req.params.id;

    return res.json({curso: `Aprendendo ${id}`})
})

server.listen(3000);

