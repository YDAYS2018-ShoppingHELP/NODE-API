const storeModel = require('../models/store');
const storeGetter = require('../../modules/storeGetter');


const Stores = {


        get : (req, res) => {
          res.status(200).json({
            status : 200,
            message : req.existingStore || req.existingStore
          })
        },

        insert : (req, res) => {
          storeGetter.saveStoreToDatabase(req.existingStore)
          .then((savedStore) => {
            res.status(200).json({
              status : 200,
              message : savedStore
            })
          })
          .catch((error) => {
            res.status(500).json({
              status : 500,
              message : `${error}`
            });
          })
        }
}


module.exports = Stores;
