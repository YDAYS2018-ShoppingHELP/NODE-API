const userGetter = require('./userGetter.js');

const Logic = {


        findUserById : (req, res, next) => {
          userGetter.findUserById(req.params.id)
          .then((existingUser) => {
            req.existingUser = existingUser;
            next();
          })
          .catch((error) => {
            res.status(500).json({
              message : `${error}`,
              statusCode : 500
            })
          })
        },


};



module.exports = Logic;
