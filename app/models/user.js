const mongoose = require ('mongoose');


const Userschema = mongoose.Schema({
  /* ID is generated automatically */
  name : String,
  address : String,
  email : String,
  password : String
  /*TODO: Add references to favs and caddies */
  //favorites : [],
  //caddies : String,
});


const User = mongoose.model('User', Userschema);

module.exports = User;
