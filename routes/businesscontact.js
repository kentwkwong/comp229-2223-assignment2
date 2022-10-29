/*
    Filename: businesscontact.js
    Student name: Wing Keung Wong
    Student ID: 301242732
    Create Date: 29-Oct-2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/businesscontact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* Get Route for the Book List page - READ operation */
router.get('/', requireAuth, contactController.displayBusinessContacts);

/* Get Route for displaying Add page - CREATE operation */
router.get('/add', requireAuth, contactController.displayAddPages);

/* POST Route for processing Add page - CREATE operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* Get Route for displaying Edit page - UPDTE operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing Edit page - UPDTE operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* Get to perform deletion - DELETE operation */
router.get('/delete/:id', requireAuth, contactController.preformDelete);







// connect to our Book Model
//let BusinessContact = require('../models/businesscontact');

/* Get Route for the Business Contact List page - READ operation 
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(contactList);
            res.render('businesscontactlist', {title: 'Business Contact List', ContactList: contactList});

        }
    });
});
*/
module.exports = router;