var express = require('express');
var router = express.Router();
var please = require('../../modules/userLogic');
var User = require('../controllers/users');

/* GET All users */
router.get('/', please.findAllUsers, User.get);

/* GET user */
router.get('/:id', please.findUserById, User.get);

/* POST user */
router.post('/', please.findUserByEmail, User.insert);

/* PATCH user */
router.patch('/:id', please.findUserById, User.update);

/* DELETE all users */
router.delete('/', please.findAllUsers, User.deleteAll);

module.exports = router;
