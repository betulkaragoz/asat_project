import Istek from "../models/istekModel.js";
import jwt from "jsonwebtoken";

const createIstek = async (req, res) => {
    try {
        const istek = await Istek.create(req.body);

        const token = createToken(istek._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
        });

        res.redirect("/");
    }catch(error){
        res.status(500).json({
            succeded : false,
            error
        });
    }
}

const createToken = (mailR) => {
    return jwt.sign({mailR}, process.env.JWT_SECRET, {
        expiresIn : '1d'
    });
};

export {
    createIstek,
};
