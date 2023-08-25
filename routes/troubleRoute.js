import express  from "express";
import * as troubleController from '../controllers/troubleController.js';

const router = express.Router();

router.route('/troublerep').post(troubleController.createTrouble);


export default router;