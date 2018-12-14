const productModel = require("../app/models/product");


const Getters = {

        findProductById : (id) => {
          return new Promise((resolve, reject) => {
            productModel.findOne({ '_id' : id }, (err, product) => {
              if(err){
                reject(err);
              } else {
                resolve(product);
              }
            });
          });
        },

        findAllProductsById : () => {
          return new Promise((resolve, reject) => {
            productModel.find({}, (err, products) => {
              if(err){
                reject(err);
              } else {
                resolve(products);
              }
            });
          });
        },


        findProductByReference : (reference) => {
          return new Promise((resolve, reject) => {

            let newProduct = new productModel ({
              name : '',
              weight : '',
              reference : '',
              price : '',
              description : ''
            });

            productModel.findOne({'reference' : reference}, (err, product) => {
              if(err){
                reject(err);
              } else if (!product) {
                resolve(newProduct);
              } else {
                resolve(product);
              }
            });
          });
        },


        saveProductToDatabase : (product) => {
          return new Promise((resolve, reject) => {
            product.save((err, product) => {
              if(err){
                reject(err);
              } else {
                resolve(product);
              }
            })
          })
        },

        updateProductToDatabase : (product) => {
          return new Promise((resolve, reject) => {
            user.update((err, product) => {
              if(err){
                reject(err);
              } else {
                resolve(product);
              }
            })
          });
        }
};


module.exports = Getters;
