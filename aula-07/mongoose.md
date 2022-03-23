import mongoose from "mongoose";

dentro do construtor, colocaremos as configurações do mongoose para conectar com o banco de dados

mongoose.conect("mongodb+srv://<username>:<password>@devhouse.wz61r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

esse objeto é para configurar um novo tipo de url
()