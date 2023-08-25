import express from "express"
import * as pageController from "../controllers/pageController.js"

const router = express.Router();
router.route("/").get(pageController.getIndexPage);
router.route("/tablo").get(pageController.getTablePage);
router.route("/login").get(pageController.getLoginPage);
router.route("/troublerep").get(pageController.getReportPage);
router.route("/reqsncomps").get(pageController.getRequestPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/employeeregister").get(pageController.getEmployeeRegisterPage);
router.route("/logout").get(pageController.getLogout);
router.route("/employeedashboard").get(pageController.getEmployeeDashboardPage);
router.route("/createbills").get(pageController.getCreateBillsPage);
router.route("/userdashboard").get(pageController.getUserDashboardPage);
router.route("/troubleDashboard").get(pageController.getTroubleDashPage);
router.route("/reqsncompsDashboard").get(pageController.getReqsnCompsPage);

export default router;