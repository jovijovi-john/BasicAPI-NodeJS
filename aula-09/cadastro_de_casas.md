Agora vamos criar um model de House

```javascript
import { model, Schema} from "mongoose";

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    // user nesse caso é o dono da casa. Vamos fazer de uma forma diferente para referenciar o id do usuario
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export default model("House", HouseSchema);
```

Não conseguimos utilizar o json para enviar um arquivo. Para isso, vamos utilizar um outro formato que é Multipart Form 

Já que ele esta cadastrando uma nova casa ele já existe no bd, logo vamos mandar esse uid no cabeçalho

=> Para trabalharmos com o multipart:

    yarn add multer

Agora vamos criar uma pasta config com um arquivo chamado upload.js
nele:

```javascript
import multer from "multer";
import path from "path"

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname)
    })
}
```

esse diskStorage({}) é pra dizer que vamos armazenar a nossa foto que a gente enviar aqui da requisição aqui no nosso projeto mesmo em algum local. destination é para dizermos o caminho dessa imagem (onde vai ficar)

esse __dirname é pro node saber / se localizar onde é a raiz do nosso projeto

agora vamos criar uma pasta chamada uploads

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..","..", "uploads")
    }) 
};

por que nao fez logo "../../uploads" ? 
    porque no windows a barra é invertida, logo dependendo do sistema poderia dar problema. Fazendo dessa forma o proprio path se adpata conforme o sistema em que esteja rodando


```javascript
export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..","..", "uploads"),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
        
            cb(null, )
        }
    }) 
};
```

filename recebe uma função, que tem como parâmetros:
    req (requisição)
    file => teremos o nome desse arquivo, extensão, tamanho... poderemos manipular como quisermos essa imagem
    cb => função de callback que será executada assim que manipularmos o nome da nossa imagem e tiver tudo pronto

    cb =>
        primeiro parametro: caso gere algum erro

routes.js:

    const routes = new Router();
    const upload = multer(uploadConfig);

    routes.post("/sessions", SessionController.store);

    routes.post("/houses", upload.single("thumbnail"), HouseController.store);

    export default routes;

como queremos enviar apenas uma imagem, é .single(), caso contrário seria .array(). Dentro dele, passamos o nome do campo que estamos passando lá

como estamos passando o upload.single() na nossa rota, temos acesso ao req.file

===============================================================================================================


Agora vamos colocar essas casas no banco

https://expressjs.com/pt-br/starter/static-files.html para entender melhor como funciona a disponibilização de arquivos estáticos com express

resumindo:

    primeira coisa que fizemos: criamos uma rota para criar uma nova casa
    
    utilizamos o multipart form data onde configuramos o multer para nos ajudar 
    
    no header da requisição para cadastrar uma casa passamos o uid do usuário que ta criando essa casa pra gente saber depois para fazer filtros, etc

    fizemos um campo virtual para acessar a imagem lá no front end



=============================================================================================

no HouseController vamos criar um método index para listar todas as casas que atendam a um determinado status requisitado pelo usuário

agora vamos fazer um método para editar uma casa que já existe:

    update

    para editar algum item da tabela, basta utilizar o método updateOne e passar no primeiro parâmetro o id do item que será editado

    não permitir que um usuário edite casas que não sejam suas, ou seja, a casa deve ter o mesmo o uid que o usuário atual para poder alterar alguma coisa

Para deletar, usamos o método destroy no HouseController

    nao precisamos passar o id da casa na rota, na verdade deve ser pelo json
    
     await House.findByIdAndDelete({
        _id: house_id
    })