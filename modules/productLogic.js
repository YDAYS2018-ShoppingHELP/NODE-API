const productGetter = require('./productGetter.js');

const Logic = {

          findProductById : (req, res, next) => {
            productGetter.findProductById(req.params.id)
            .then((existingProduct) => {
              if(!existingProduct){
                res.status(403).json({
                  message : `Product does not exist in database`,
                  statusCode : 403
                });
              } else {
                req.existingProduct = existingProduct;
                next();
              }
            })
            .catch((error) => {
              res.status(500).json({
                message : `${error}`,
                statusCode : 500
              });
            })
          },

          findAllProductsById : (req, res, next) => {
            productGetter.findAllProductsById()
            .then((existingProducts) => {
              req.existingProducts = existingProducts;
              next();
            })
            .catch((error) => {
              res.status(500).json({
                message : `${error}`,
                statusCode : 500
              });
            })
          },

          findProductByReference : (req, res, next) => {
            productGetter.findProductByReference(req.body.reference)
            .then((existingProduct) => {
              if(!existingProduct){
                res.status(403).json({
                  message : `Product does not exist in database`,
                  statusCode : 403
                });
              } else {
                req.existingProduct = existingProduct;

                req.existingProduct.name = req.body.name,
                req.existingProduct.weight = req.body.weight,
                req.existingProduct.reference = req.body.reference;
                req.existingProduct.price = req.body.price,
                req.existingProduct.description = req.body.description;

                next();
              }
            })
            .catch((error) => {
              res.status(500).json({
                message : `${error}`,
                statusCode : 500
              });
            })
          }

};

module.exports = Logic;
