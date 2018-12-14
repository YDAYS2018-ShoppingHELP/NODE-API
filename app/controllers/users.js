const userModel = require('../models/user');
const userGetter = require('../../modules/userGetter');

const Users = {

          get : (req, res) => {
            res.status(200).json({
              status : 200,
              message : req.existingUsers || req.existingUser
            })
          },

          insert : (req, res) => {
            userGetter.saveUserToDatabase(req.existingUser)
            .then((savedUser) => {
              res.status(200).json({
                status : 200,
                message : savedUser
              })
            })
            .catch((error) => {
              res.status(500).json({
                status : 500,
                message : `${error}`
              })
            })
          },

          update : (req, res) => {
            userGetter.updateUserToDatabase(req.existingUser)
            .then((savedUser) => {
              res.status(200).json({
                status : 200,
                message : savedUser
              })
            })
            .catch((error) => {
              res.status(500).json({
                status : 500,
                message : `${error}`
              })
            })
          },

          deleteAll : (req, res) => {
            userGetter.deleteAllUsersFromDatabase()
            .then((result) => {
              res.status(200).json({
                status : 200,
                message : `user successfully deleted`
              })
              .catch((error) => {
              res.status(500).json({
                status : 500,
                message : `${error}`
              })
            }),

          delete : (req, res) => {
            userGetter.deleteUserFromDatabase(req.existingUser)
            .then((result) => {
              res.status(200).json({
                status : 200,
                message : `user successfully deleted`

              })
            })
            .catch((error) => {
              res.status(500).json({
                status : 500,
                message : `${error}`
              })
            })
          }


};



module.exports = Users;
