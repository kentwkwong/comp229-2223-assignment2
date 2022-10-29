let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Contact = require('../models/businesscontact');

/* Get Route for the Business Contact List page - READ operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(contactList);
            res.render('businesscontact', {title: 'Business Contact List', ContactList: contactList});

        }
    });
});

module.exports = router;