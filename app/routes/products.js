var express = require('express');
var router = express.Router();
var please = require('../../modules/productLogic');
var Product = require('../controllers/products');

/* GET product */
router.get('/:id', please.findProductById, Product.get);

/* GET all products */
router.get('/', please.findAllProductsById, Product.get);

/* INSERT product */
router.post('/', please.findProductByReference, Product.insert);

/* DELETE product */
router.delete('/:id', please.findProductById, Product.delete);

module.exports = router;
