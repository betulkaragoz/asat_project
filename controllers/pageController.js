const getIndexPage = (req, res) => {
    res.render("index", {
        link: 'index'
    });
}

const getTablePage = (req, res) => {
    res.render("tablo", {
        link: 'tablo'
    });
}

const getLoginPage = (req, res) => {
    res.render("login", {
        link: 'login'
    });
}

const getReportPage = (req, res) => {
    res.render("troublerep", {
        link: 'troublerep'
    });
}

const getRequestPage = (req, res) => {
    res.render("reqsncomps", {
        link: 'reqsncomps'
    });
}

const getRegisterPage = (req, res) => {
    res.render("register", {
        link: 'register'
    });
}

const getEmployeeRegisterPage = (req, res) => {
    res.render("employeeregister", { 
        link: 'employeeregister' 
    });
}

const getEmployeeDashboardPage = (req, res) => {
    res.render("employeedashboard", { 
        link: 'employeedashboard' 
    });
}

const getUserDashboardPage = (req, res) => {
    res.render("userdashboard", { 
        link: 'userdashboard' 
    });
}

const getCreateBillsPage = (req, res) => {
    res.render("createbills", { 
        link: 'createbills' 
    });
}

const getTroubleReportPage = (req, res) => {
    res.render("troublerep", { 
        link: 'troublerep' 
    });
}

const getTroubleDashPage = (req, res) => {
    res.render("troubleDashboard", { 
        link: 'troubleDashboard' 
    });
}

const getReqsnCompsPage = (req, res) => {
    res.render("reqsncompsDashboard", { 
        link: 'reqsncompsDashboard' 
    });
}

const getLogout = (req, res) => {
    res.cookie("jwt", "", {
        maxAge: 1
    })
    res.redirect("/login");
}



export {
    getIndexPage,
    getTablePage,
    getLoginPage,
    getReportPage,
    getRequestPage,
    getRegisterPage,
    getEmployeeRegisterPage,
    getEmployeeDashboardPage,
    getCreateBillsPage,
    getUserDashboardPage,
    getTroubleReportPage,
    getTroubleDashPage,
    getLogout,
    getReqsnCompsPage,

}
