import Trouble from "../models/troubleModel.js";
import jwt from "jsonwebtoken";

const createTrouble = async(req, res) => {
    try{
        const trouble = await Trouble.create(req.body);

        const token = createToken(trouble._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
        });

        res.redirect("/troublerep");
    }catch (error){
        res.status(500).json({
            succeded : false,
            error
        });
    }
}

const createToken = (tckno) => {
    return jwt.sign({tckno}, process.env.JWT_SECRET, {
        expiresIn : '1d'
    });
};

export {
    createTrouble
};