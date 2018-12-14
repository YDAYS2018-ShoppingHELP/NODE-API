const userModel = require("../app/models/user");


const Getters = {


        findUserById : (id) => {
          return new Promise((resolve, reject) => {
            userModel.findOne({ '_id' : id}, (err, user) => {
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

        findAllUsers : () => {
          return new Promise((resolve, reject) => {
            console.log("here 1");
            userModel.find({}, (err, users) => {
              if(err){
                reject(err);
              } else if(!users){
                reject(users);
              } else {
                resolve(users);
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
        },

        updateUserToDatabase : (user) => {
          return new Promise((resolve, reject) => {
            user.update((err, user) => {
              if(err){
                reject(err);
              } else {
                resolve(user);
              }
            });
          });
        },

        deleteAllUsersFromDatabase : () => {
          return new Promise((resolve, reject) => {
            userModel.deleteMany({}, (err, users)=> {
              if(err){
                reject(err);
              } else {
                resolve(users);
              }
            });
          });
        },

        deleteUserFromDatabase : (user) => {
          return new Promise((resolve, reject) => {
            userModel.findOneAndDelete(user._id, (err, result) => {
              if(err){
                reject(err);
              } else {
                resolve(result);
              }
            })
          });
        }
};

module.exports = Getters;
