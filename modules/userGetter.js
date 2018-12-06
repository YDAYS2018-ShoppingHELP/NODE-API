const userModel = require("../app/models/user");


const Getters = {


        findUserById : (id) => {
          return new Promise((resolve, reject) => {

            let newUser = {
              name : '',
              address : '',
              email : '',
              password : ''
            };

            userModel.findOne({ 'id' : id}, (err, user) => {
              if(err){
                reject(err);
              } else if(!user){
                resolve(newUser);
              } else {
                resolve(user);
              }
            });
          });
        }


};

module.exports = Getters;
