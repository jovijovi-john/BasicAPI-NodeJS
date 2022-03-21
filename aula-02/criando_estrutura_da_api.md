=> yarn init -y
=> yarn add express

cria um index.js

para importar o expresse e começar utilizar ele:
    const express = require("express")

const server = express();

server.listen() vai servir para o express "ouvir" uma porta

```javascript
// localhost:3000/curso
// primeiro segundo parÂmetro é uma função 
server.get("/curso", (req, res) => {
    console.log("Acessou a rota");  
    return res.send("Hello World")
})

server.listen(3000)

// o req representa os dados da requisição, query params, route params, dados do boy.
// res representa as informações para a gente retornar uma mensagem para o front-end

```
podemos retornar um json ao inves do .send()

```javascript
server.get("/curso", (req, res) => {
    return res.json({mensagem: "Boa tarde", curso: "Node Js"})
})
```
