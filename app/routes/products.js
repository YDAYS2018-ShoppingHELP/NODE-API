var express = require('express');
var router = express.Router();
var please = require('../../modules/productLogic');
var Product = require('../controllers/products');


/* INSERT PRODUCT */
router.post('/', please.findProductByReference, Product.insert);

module.exports = router;
