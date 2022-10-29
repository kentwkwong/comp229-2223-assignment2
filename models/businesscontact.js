let mongoose = require('mongoose');

// create a model class
let busContactModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: "business_contact"
});

module.exports = mongoose.model('Contacts', busContactModel);