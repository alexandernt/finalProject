const express = require ('express');
const router = express.Router();
const homeController = require ("../controllers/home.js");
const calcController = require ("../controllers/calc.js");
const loginController = require ("../controllers/login.js");
const registerController = require ("../controllers/register.js");
const dashboardController = require ('../controllers/dashboard.js');


//ROUTERS
router.get('/', homeController.home);
router.post('/', homeController.home);
router.get('/calculator', calcController.calc);
router.post('/calculator', calcController.calc);
router.get('/login', loginController.login);
router.post('/login', loginController.login);
router.get('/register', registerController.register);
router.post('/register', registerController.register);
router.get('/dashboard', dashboardController.dashboard);
router.post('/dashboard', dashboardController.dashboard);

module.exports = router;
