const express = require('express');
const router = express.Router();


const homeController = require("../controllers/home");
const calcController = require("../controllers/calc");


router.get('/', homeController.home);
router.post('/', homeController.home);
router.get('/calculator', calcController.calculator);
router.post('/calculator', calcController.calculator);



module.exports = router;