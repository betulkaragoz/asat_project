
// import Employee from "../models/employeeModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const createEmployee = async (req, res) => {
//     try {
//         const employee = await Employee.create(req.body);
//         res.redirect("/login");

//     } catch (error) {
//         res.status(500).json({
//             succeded: false,
//             error,
//         });

//     }
// };


// const loginEmployee = async (req, res) => {
//     try {

//         const { userTCE, passwordE } = req.body;
//         const employee = await Employee.findOne({ userTCE });
//         console.log(employee.passwordE);
//             console.log(passwordE);

//         if (employee.passwordE === passwordE) {
            
            
//                 const token = createToken(employee._id);
//                 res.cookie("jwt", token, {
//                     httpOnly: true,
//                     maxAge: 1000 * 60 * 60 * 24
//                 });

//                 res.redirect("/employees/employeedashboard");
//             }

//             else {
//                 res.status(401).json({
//                     succeded: false,
//                     error: "Şifre eşleşmedi!",
//                 });

//         }        

//     } catch (error) {
//         res.status(500).json({
//             succeded: false,
//             error: "Bu bilgilere sahip bir üye bulunamadı!",
//         });

//     }
// };

// const createToken = (userTCE) => {
//     return jwt.sign({ userTCE }, process.env.JWT_SECRET, {
//         expiresIn: '1d'
//     });
// };

// const getEmployeeDashboardPage = (req, res) => {
//     res.render("employeedashboard", {
//         link: 'employeedashboard'
//     });
// };

// export {
//     createEmployee,
//     loginEmployee,
//     getEmployeeDashboardPage
// };




import Employee from "../models/employeeModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.redirect("/login");
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });

    }
};

const loginEmployee = async (req, res) => {
    try {

        const { userTCE, passwordE } = req.body;
        const employee = await Employee.findOne({ userTCE });
        let same1 = false;
    


        if ( employee) {
            same1 = await bcrypt.compare(passwordE, employee.passwordE);

       
        } else {
            return res.status(401).json({
                succeded: false,
                error: "Bu bilgilere sahip bir üye bulunamadı!",
            });
        }
        if (same1) {


            const token = createToken(employee._id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            });

            res.redirect("/employees/employeedashboard");


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
        console.log(error);
    }
};

const createToken = (userTCE) => {
    return jwt.sign({ userTCE }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

const getEmployeeDashboardPage = (req, res) => {
    res.render("employeedashboard", {
        link: 'employeedashboard'
    });
}

export {
    createEmployee,
    loginEmployee,
    getEmployeeDashboardPage
};