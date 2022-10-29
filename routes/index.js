/*
    Filename: index.js
    Student name: Wing Keung Wong
    Student ID: 301242732
    Create Date: 7-Oct-2022
*/


var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET thankyou page. */
router.get('/thankyou', indexController.displayThankyouPage);

/* Get Route for displaying Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing Login page */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing Register page */
router.post('/register', indexController.processRegisterPage);

/* Get to perform logout */
router.get('/logout', indexController.performLogout);



module.exports = router;
