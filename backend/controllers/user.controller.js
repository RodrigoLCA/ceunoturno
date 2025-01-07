// import Star from "../models/star.model";
import User from "../models/user.model.js";

export const getUser = async(req, res) => {
    res.send("obter usuarios?");
}

export const createUser = async(req, res) => {
    try {
        const { nome, email, ativo } = req.body;

        if(!nome || !email || !ativo) {
            return res.status(400).json({
                success: false,
                message: "Nome, email e atividade são obrigatórios."
            });
        }

        const newUser = new User({nome, email, ativo});

        await newUser.save();
    } catch (error) {

    }
}