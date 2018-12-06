const userModel = require('../models/user');


const Users = {

          get : (req, res) => {
            res.status(200).json({
              status : 200,
              message : req.existingUser
            })

          },


          insert : (req, res) => {

            req.existingUser.save()
            .then((savedUser) => {
              res.status(201).json({
                status: 201,
                message : `User inserted in database`,
              })
            })
            .catch((error) => {
              res.status(500).json({
                status: 500,
                message : `${error}`,
              })
            })
          },

          update : (req, res) => {


          },

          delete : (req, res) => {


          }


};



module.exports = Users;
