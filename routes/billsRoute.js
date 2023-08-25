import express  from "express";
import * as billControler from '../controllers/billControler.js';

const router = express.Router();

router.route('/createbills').post(billControler.createBill);


export default router;