import Bill from "../models/billModel.js";
import jwt from "jsonwebtoken";

const createBill = async (req, res) => {
    try {
        const bill = await Bill.create(req.body);

        const token = createToken(bill._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
        });
        res.redirect("/createbills");

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });

    }
};

const createToken = (billID) => {
    return jwt.sign({ billID }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};


export {
    createBill
};