const userGetter = require('./userGetter.js');

const Logic = {


        findUserById : (req, res, next) => {
          userGetter.findUserById(req.params.id)
          .then((existingUser) => {
            if(!existingUser){
              res.status(403).json({
                message : `User does not exist in database`,
                statusCode : 403
              });
            } else {
              req.existingUser = existingUser;
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


        findUserByEmail : (req, res, next) => {
          userGetter.findUserByEmail(req.body.email)
          .then((existingUser) => {
            if(!existingUser.email){
              req.existingUser = existingUser;
              req.existingUser.email = req.body.email;
              next();
            } else {
              res.status(403).json({
                message : `This email already exist`,
                statusCode : 403
              });
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
