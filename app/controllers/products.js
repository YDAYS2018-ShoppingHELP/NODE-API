const productModel = require('../models/product');
const productGetter = require('../../modules/productGetter');


const Products = {

          get : (req, res) => {
            res.status(200).json({
              status : 200,
              message : req.existingProduct || req.existingProducts
            })
          },

          insert : (req, res) => {
            productGetter.saveProductToDatabase(req.existingProduct)
            .then((savedProduct) => {
              res.status(200).json({
                status : 200,
                message : savedProduct
              })
            })
            .catch((error) => {
              res.status(500).json({
                status : 500,
                message : `${error}`
              })
            })
          }

          update : (req, res) => {
            productGetter.updateProductToDatabase(req.existingProduct)
            .then((savedProduct) => {
              res.status(200).json({
                status : 200,
                message : savedUser
              })
            })
            .then((error) => {
              res.status(500).json({
                status : 500,
                message : `${error}`
              })
            })
          }



};



module.exports = Products;
