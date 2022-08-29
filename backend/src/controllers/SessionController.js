// Métodos que podemos ter num controller: index, show, update, store, destroy
/*
 *   index: listagem de sessões
 *   store: criar uma nova sessão (criar um novo login)
 *   show: listar uma ÚNICA sessão
 *   update: alterar uma sessão (atualizar os dados de um perfil do usuário)
 *   destroy: quando queremos deletar uma sessão (excluir um usuário)
 */

import * as Yup from 'yup';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        });

        // pegando o email que ele ta mandando la pela requisição
        const { email } = req.body;

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Informe um email válido',
            });
        }

        // findOne vai procurar apenas um registro. Vamos ver se já existe esse email no banco de dados
        let user = await User.findOne({
            email,
        });

        // Se não tiver nenhum usuário com esse email, criaremos um
        if (!user) {
            // criando no banco de dados com esse email. Como é algo que pode demorar, devemos usar async
            user = await User.create({
                email,
            });
        }

        // retornando esse usuario criado como resposta
        return res.json(user);
    }
}

export default new SessionController();
