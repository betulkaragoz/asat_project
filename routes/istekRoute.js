import express  from "express";
import * as istekController from '../controllers/istekController.js';

const router = express.Router();

router.route('/reqsncomps').post(istekController.createIstek);

export default router;