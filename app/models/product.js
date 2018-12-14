const mongoose = require ('mongoose');

const Productschema = mongoose.Schema({
  /* ID is generated automatically */
  name : String,
  weight : Number,
  reference : String,
  price : Number,
  description : String
});


const Product = mongoose.model('Product', Productschema);

module.exports = Product;
