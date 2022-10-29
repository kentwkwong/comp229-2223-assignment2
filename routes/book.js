let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// const { register } = require('../models/book');

let passport = require('passport');

let bookController = require('../controllers/book');

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
router.get('/', bookController.displayBookList);

/* Get Route for displaying Add page - CREATE operation */
router.get('/add', requireAuth, bookController.displayAddPages);

/* POST Route for processing Add page - CREATE operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* Get Route for displaying Edit page - UPDTE operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing Edit page - UPDTE operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* Get to perform deletion - DELETE operation */
router.get('/delete/:id', requireAuth, bookController.preformDelete);

module.exports = router;