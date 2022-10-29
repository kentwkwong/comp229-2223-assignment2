/*
    Filename: businesscontact.js
    Student name: Wing Keung Wong
    Student ID: 301242732
    Create Date: 29-Oct-2022
*/

let mongoose = require('mongoose');

// create a model class
let busContactModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: "businesscontact"
});

module.exports = mongoose.model('Contacts', busContactModel);