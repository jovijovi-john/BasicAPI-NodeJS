import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import conection from "./conection.js";

class App{

    constructor() {
        this.server = express();

        // conection é um arquivo que contém a seguinte configuração: 
        // mongodb+srv://<username>:<password>@devhouse.wz61r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        
        mongoose.connect(conection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        this.middlewares();
        this.routes();
    }

    middlewares(){
        // vamos usar o json
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;