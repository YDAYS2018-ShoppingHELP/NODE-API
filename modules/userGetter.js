const userModel = require("../app/models/user");


const Getters = {


        findUserById : (id) => {
          return new Promise((resolve, reject) => {
            userModel.findOne({ 'id' : id}, (err, user) => {
              if(err){
                reject(err);
              } else if(!user){
                reject(user);
              } else {
                resolve(user);
              }
            });
          });
        },

        findUserByEmail : (email) => {
          return new Promise((resolve, reject) => {
            let newUser = new userModel({
              name : '',
              address : '',
              email : '',
              password : ''
            });

            userModel.findOne({'email' : email}, (err, user) => {
              if(err){
                reject(err);
              } else if(!user){
                resolve(newUser);
              } else {
                resolve(user)
              }
            });
          });
        },

        saveUserToDatabase : (user) => {
          return new Promise((resolve, reject) => {
            user.save((err, user) => {
              if(err){
                reject(err);
              } else {
                resolve(user);
              }
            });
          });
        }


};

module.exports = Getters;
