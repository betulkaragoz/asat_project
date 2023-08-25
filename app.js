import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import conn from './db.js';

import pageRoute from "./routes/pageRoute.js";
import userRoute from "./routes/userRoute.js";
import employeeRoute from "./routes/employeeRoute.js";
import billsRoute from "./routes/billsRoute.js";
import troubleRoute from "./routes/troubleRoute.js";
import istekRoute from "./routes/istekRoute.js";
import sikayetRoute from "./routes/sikayetRoute.js";

import { checkUser } from './middlewares/authMiddleware.js';
import { checkUserE } from './middlewares/authMiddleware.js';
import { checkBill } from './middlewares/authMiddleware.js';
import { checkTrouble } from './middlewares/authMiddleware.js';
import { checkIstek } from './middlewares/authMiddleware.js';
import { checkSikayet } from './middlewares/authMiddleware.js';


dotenv.config();

//connection to the DB
conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

//modelde gönderilen json formatını okuyabilmek için kullanılır.
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.render('index');
// }) 

//routes
app.get("*", checkUser);
app.get("*",checkUserE);
app.get("*", checkBill);
app.get("*", checkTrouble);
app.get("*",checkIstek);
app.get("*",checkSikayet);
app.use("/", pageRoute);
app.use('/users', userRoute);
app.use('/employees', employeeRoute);
app.use('/bills', billsRoute);
app.use('/troubles', troubleRoute);
app.use('/istek', istekRoute);
app.use('/sikayet', sikayetRoute);


app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
});
