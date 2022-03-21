const express = require("express");
const server = express();

server.get("/curso", (req, res) => {
    console.log("Acessou a rota");

    return res.json({mensagem: "Hello World", curso: "Node Js"})
})

server.listen(3000);

