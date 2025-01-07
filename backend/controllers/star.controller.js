// import Star from "../models/star.model";

import Star from "../models/star.model.js";

export const getStar = async (req, res) => {
    res.send("kkkk");
};

export const createStar = async (req, res) => {
    try {
        console.log(req.body);
        const {price, name, starType, image} = req.body;

        if(!price || !name || !star_type || !image)
        {
            return res.status(400).json({
                success: false,
                message: "Nome e preço são obrigatórios."
            });
        }

        const newStar = new Star({name, price});

        await newStar.save();

        res.status(201).json({
            success: true, message: ""
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Houve um erro inesperado."
        });
    }
}