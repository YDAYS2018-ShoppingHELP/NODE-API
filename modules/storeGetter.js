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

          findStoreById : (id) => {
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

          findAllStoresById : () => {
            return new Promise((resolve, reject) => {
              storeModel.find({}, (err, stores) => {
                if(err){
                  reject(err);
                } else {
                  resolve(stores);
                }
              });
            });
          },

          updateStoreToDatabase : (store) => {
            return new Promise((resolve, reject) => {
              storeModel.update((err, store) => {
                if(err) {
                  reject(err);
                } else {
                  resolve(store);
                }
              });
            });
          },

          insertStoreToDatabase : (store) => {
            return new Promise((resolve, reject) => {
              store.save((err, store) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(store);
                }
              });
            });
          },

          deleteStoreFromDatabase : (store) => {
            return new Promise((resolve, reject) => {
              storeModel.findOneAndDelete(store._id, (err, result) => {
                if(err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              })
            })
          }
};

module.exports = Getters;
