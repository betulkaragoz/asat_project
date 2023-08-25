import Sikayet from "../models/sikayetModel.js";
import jwt from "jsonwebtoken";

const createSikayet = async (req, res) => {
    try {
        const sikayet = await Sikayet.create(req.body);

        const token = createToken(sikayet._id);
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

const createToken = (mailS) => {
    return jwt.sign({mailS}, process.env.JWT_SECRET, {
        expiresIn : '1d'
    });
};

export {
    createSikayet,
};
