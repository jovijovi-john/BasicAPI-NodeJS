import { model, Schema} from "mongoose";

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toJSON: {
        virtuals: true
    }
})

// esse objeto como segundo parâmetro serve para colocar nossa variável virtual junto com a requisição

// esse .virtual vai criar um campo que nao vai ser registrado no banco, mas quando fizermos uma busca ele vai ta la mas não vai ta criado na nossa tabela
HouseSchema.virtual("thumbnail_url").get(function () {
    return `http://localhost:8000/files/${this.thumbnail}`
})

export default model("House", HouseSchema);