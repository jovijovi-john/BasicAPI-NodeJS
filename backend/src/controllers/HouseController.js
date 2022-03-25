import * as Yup from "yup";

import House from "../models/House";
import User from "../models/User";

class HouseController {

    async index(req, res){

        const { status } = req.query;

        // ta buscando todas as casas do model de casa ( tabela de casas) que tenha o status === status da requisição
        const houses = await House.find({ status })

        return res.json(houses);
    }

    async store(req, res){

        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.boolean().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: "Falha na validação"
            })
        }

        const { filename } = req.file
        const { description, price, location, status } = req.body
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })

        return res.json({
            house
        })
    }

    async update(req, res){

        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.boolean().required()
        })

        const { filename } = req.file;
        const { house_id } = req.params;
        const { description, price, location, status } = req.body
        const { user_id } = req.headers;

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: "Falha na validação"
            })
        }
        
        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        // Se o usuário não for o mesmo usuario que ta cadastrado na casa. Ou seja, se o usuário não for dono da casa
        if (String(user._id) !== String(houses.user)){
            return res.status(401).json({error: "You are not authorized"});
        }

        await House.updateOne({_id: house_id}, {
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })

        return res.send()
    }

    async destroy(req, res){

        const { house_id } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        // Se o usuário não for o mesmo usuario que ta cadastrado na casa. Ou seja, se o usuário não for dono da casa

        if (String(user._id) !== String(houses.user)){
            return res.status(401).json({error: "You are not authorized"})
        }

        // deletando a casa do banco
        await House.findByIdAndDelete({
            _id: house_id
        })

        return res.json({message: "excluida com sucesso"})
    }
}

export default new HouseController;