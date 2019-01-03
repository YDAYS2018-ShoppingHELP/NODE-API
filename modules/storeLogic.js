const storeGetter = require('./storeGetter.js');


const Logic = {

          findStoreByGPS : (req, res, next) => {
            storeGetter.findStoreByGPS(req.body.longitude, req.body.latitude)
            .then((existingStore) => {
              req.existingStore = existingStore;
              req.existingStore.name.length < 0 ? req.existingStore.name = req.body.name : req.existingStore.name;
              req.existingStore.address.length < 0 ? req.existingStore.address = req.body.address : req.existingStore.address;
              req.existingStore.phonenumber < 0 ? req.existingStore.phonenumber = req.body.phonenumber : req.existingStore.phonenumber;
              req.existingStore.longitude < 0 ? req.existingStore.longitude = req.body.longitude : req.existingStore.longitude;
              req.existingStore.latitude < 0 ? req.existingStore.latitude = req.body.latitude : req.existingStore.latitude;
              next();
            })
            .catch((error) => {
              res.status(500).json({
                message : `${error}`,
                statusCode : 500
              });
            })
          },

          findStoreById : (req, res, next) => {
            storeGetter.findStoreById(req.params.id)
            .then((existingStore) => {
              req.existingStore = existingStore;
              next();
            })
            .catch((existingStore) => {
              res.status(500).json({
                message : `${error}`,
                statusCode : 500
              });
            })
          },

          findAllStoresById : (req, res, next) => {
            storeGetter.findAllStoresById()
            .then((existingStores) => {
              req.existingStores = existingStores;
              next();
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
