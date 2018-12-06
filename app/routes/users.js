var express = require('express');
var router = express.Router();
var please = require('../../modules/userLogic');
var User = require('../controllers/users');

/* GET user */
router.get('/:id', please.findUserById, User.get);

module.exports = router;
