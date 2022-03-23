import { Schema, model } from "mongoose";

// Aqui vamos ter qual é a estrutura do nosso usuário. Ou seja, quais campos que tem nesse usuário? Quais os atributos que temos nessa tabela usuário?

const UserSchema = new Schema({
    email: String
})

export default model("User", UserSchema);