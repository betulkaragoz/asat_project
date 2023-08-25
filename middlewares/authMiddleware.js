import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Employee from "../models/employeeModel.js"
import Bill from "../models/billModel.js"
import Trouble from "../models/troubleModel.js";
import Istek from "../models/istekModel.js";
import Sikayet from "../models/sikayetModel.js";

const checkUser = async(req , res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }else{
                const user = await User.findById(decodedToken.userTC);
                res.locals.user = user;
                next();
            }
           
        });
    }else{
        res.locals.user = null;
        next();    
    }
}

const checkUserE = async(req , res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.employee = null;
                next();
            }else{
                const employee = await Employee.findById(decodedToken.userTCE);
                res.locals.employee = employee;
                next();
            }
           
        });
    }else{
        res.locals.employee = null;
        next();    
    }
}

const checkBill = async(req , res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.bill = null;
                next();
            }else{
                const bill = await Bill.findById(decodedToken.billID);
                res.locals.bill = bill;
                const user = await User.findById(decodedToken.userTC);
                const billS = await Bill.find({});
                res.locals.billS = billS;
                next();
            }
           
        });
    }else{
        res.locals.bill = null;
        next();    
    }
}

const checkTrouble = async(req , res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.trouble = null;
                next();
            }else{
                const trouble = await Trouble.findById(decodedToken.tckno);
                res.locals.trouble = trouble;
                const troubleS = await Trouble.find({});
                res.locals.troubleS = troubleS;
                next();
            }
           
        });
    }else{
        res.locals.trouble = null;
        next();    
    }
}

const checkIstek = async(req , res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.istek = null;
                next();
            }else{
                const istek = await Istek.findById(decodedToken.mailR);
                res.locals.istek = istek;
                const istekS = await Istek.find({});
                res.locals.istekS = istekS;
                next();
            }
           
        });
    }else{
        res.locals.istek = null;
        next();    
    }
}

const checkSikayet = async(req , res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.sikayet = null;
                next();
            }else{
                const sikayet = await Sikayet.findById(decodedToken.mailS);
                res.locals.sikayet = sikayet;
                const sikayetS = await Sikayet.find({});
                res.locals.sikayetS = sikayetS;
                next();
            }
           
        });
    }else{
        res.locals.sikayet = null;
        next();    
    }
}



const authenticateToken = (req, res, next) => {

    try{
        const token = req.cookies.jwt;
        if (token){
            jwt.verify(token, process.env.JWT_SECRET, (err) => {
                if(err){
                    console.log(err.message);
                    res.redict("/login");
                }else{
                    next();
                }
            });
        }

    }catch (error){
        res.status(401).json({
            succeded : false,
            error : 'Not authorized',
        })
    }
   
};

export { 
    authenticateToken,
    checkUser, 
    checkUserE, 
    checkBill,
    checkTrouble,
    checkIstek,
    checkSikayet,
};