import Reserve from '../models/Reserve';
import User from '../models/User';
import House from '../models/House';

class ReserveController {
    async index(req, res) {
        const { user_id } = req.headers;

        // engraçado que aqui o populate funcionou
        const reserves = await Reserve.find({ user: user_id }).populate(
            'house'
        );
        return res.json(reserves);
    }

    async store(req, res) {
        const { user_id } = req.headers;
        const { house_id } = req.params;
        const { date } = req.body;

        const house = await House.findById(house_id);

        // Não permitir aluguéis de casas que nao existem no banco
        if (!house) {
            return res.status(400).json({
                error: 'Essa casa não existe',
            });
        }

        // Não permitir aluguéis de casas que não estejam disponíveis
        if (house.status !== true) {
            return res.status(400).json({
                error: 'Solicitação indisponível',
            });
        }

        // Não permitir aluguéis nas suas próprias casas
        const user = await User.findById(user_id);
        if (String(house.user) === String(user._id)) {
            return res.status(401).json({
                error: 'Reserva não permitida',
            });
        }

        // Fazendo a reserva
        const reserve = await Reserve.create({
            date,
            user,
            house,
        });

        // A critério de comentário, o user._id é === ao user_id
        // Não funcionou o método populate
        // await reserve.populate("house").populate("user").execPopulate();

        return res.json(reserve);
    }

    async destroy(req, res) {
        const { reserve_id } = req.body;

        await Reserve.findByIdAndDelete({ _id: reserve_id });

        return res.send();
    }
}

export default new ReserveController();
