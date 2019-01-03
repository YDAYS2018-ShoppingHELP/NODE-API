const mongoose = require ('mongoose');

const storeschema = mongoose.Schema({
  /* ID is generated automatically */
  name : String,
  address : String,
  phonenumber : String,
  longitude : String,
  latitude : String
});


const Store = mongoose.model('Store', storeschema);

module.exports = Store;
