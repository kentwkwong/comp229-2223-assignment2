/*
    Filename: businesscontact.js
    Student name: Wing Keung Wong
    Student ID: 301242732
    Create Date: 29-Oct-2022
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let BusinessContact = require('../models/businesscontact');

module.exports.displayBusinessContacts = (req, res, next) => {
    BusinessContact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(contactList);
            res.render('businesscontact/list', {
                title: 'Business Contact', 
                BusinessContactList: contactList, 
                displayName: req.user ? req.user.displayName : ''
            });

        }
    }).sort({"name":1});
};

module.exports.displayAddPages = (req, res, next)=>{
    res.render('businesscontact/add', {
        title: 'Add Contact',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.processAddPage = (req, res, next)=>{
    let newContact = BusinessContact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email":req.body.email
    });

    BusinessContact.create(newContact, (err, BusinessContact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the businesscontact
            res.redirect('/businesscontact');
        }
    });
}

module.exports.displayEditPage = (req, res, next)=>{
    let id= req.params.id;

    BusinessContact.findById(id, (err, contactToEdit)=>{
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('businesscontact/edit', { 
                title: 'Edit Book', 
                contact: contactToEdit, 
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.processEditPage = (req, res, next)=>{
    let id = req.params.id
    
    let updatedContact = BusinessContact({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email":req.body.email
    });

    BusinessContact.updateOne({_id: id}, updatedContact, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the businesscontact
            res.redirect('/businesscontact');
        }
    });
}

module.exports.preformDelete = (req, res, next)=>{
    let id = req.params.id;
    BusinessContact.remove({_id:id}, (err)=>{
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the businesscontact
            res.redirect('/businesscontact');
        }
    })
}