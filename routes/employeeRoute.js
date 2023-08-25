import express from 'express';
import * as employeeController from '../controllers/employeeController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/employeeregister').post(employeeController.createEmployee);
router.route('/login').post(employeeController.loginEmployee);
router.route('/employeedashboard').get(authMiddleware.authenticateToken, employeeController.getEmployeeDashboardPage);


export default router;