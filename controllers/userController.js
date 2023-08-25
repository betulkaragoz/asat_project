import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.redirect("/login");
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });

    }
};

const loginUser = async (req, res) => {
    try {

        const { userTC, password } = req.body;
        const user = await User.findOne({ userTC });
        let same = false;


        if (user) {
            same = await bcrypt.compare(password, user.password);

        } else {
            return res.status(401).json({
                succeded: false,
                error: "Bu bilgilere sahip bir üye bulunamadı!",
            });
        }
        if (same) {


            const token = createToken(user._id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            });

            res.redirect("/users/userdashboard");


        } else {
            res.status(401).json({
                succeded: false,
                error: "Şifre eşleşmedi!",
            });
        }

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};

const createToken = (userTC) => {
    return jwt.sign({ userTC }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

const getUserDashboardPage = (req, res) => {
    res.render("userdashboard", {
        link: 'userdashboard'
    });
}

export {
    createUser,
    loginUser,
    getUserDashboardPage
};