var express = require('express');
var router = express.Router();
var please = require('../../modules/storeLogic');
var Store = require('../controllers/stores');


/* GET store */
router.get('/:id', please.findStoreById, Store.get);

/* POST store */
router.post('/', please.findStoreByGPS, Store.insert);



module.exports = router;
