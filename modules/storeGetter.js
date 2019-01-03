const storeModel = require("../app/models/store");

const Getters = {


          findStoreByGPS : (longitude, latitude) => {
            return new Promise((resolve, reject) => {

              let newStore = new storeModel({
                name : '',
                address : '',
                phonenumber : '',
                longitude : '',
                latitude : ''
              });

              storeModel.findOne({'longitude': longitude, 'latitude' : latitude}, (err, store) => {
                if(err){
                  reject(err);
                } else if (!store) {
                  resolve(newStore);
                } else {
                  resolve(store);
                }
              });
            });
          },

          findStoreById : (store) => {
            return new Promise((resolve, reject) => {
              storeModel.findOne({ '_id' : id }, (err, store) => {
                if(err){
                  reject(err);
                } else {
                  resolve(store);
                }
              });
            });
          },

          saveStoreToDatabase : (store) => {
            return new Promise((resolve, reject) => {
              store.save((err, store) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(store);
                }
              });
            });
          }
};

module.exports = Getters;
