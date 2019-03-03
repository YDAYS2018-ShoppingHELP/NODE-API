var express = require('express');
var router = express.Router();
var please = require('../../modules/storeLogic');
var Store = require('../controllers/stores');


/* GET store */
router.get('/:id', please.findStoreById, Store.get);

/* GET all stores */
router.get('/', please.findAllStoresById, Store.get);

/* POST store */
router.post('/', please.findStoreByGPS, Store.insert);

/* PATCH store */
router.patch('/:id', please.findStoreById, Store.update);

/* DELETE store */
router.delete('/:id', please.findStoreById, Store.delete);



module.exports = router;
