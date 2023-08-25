import express  from "express";
import * as sikayetController from '../controllers/sikayetController.js';

const router = express.Router();

router.route('/reqsncomps').post(sikayetController.createSikayet);

export default router;