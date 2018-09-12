// TripModel.js
var mongoose = require('mongoose');
// Setup schema
var TripSchema = mongoose.Schema({
    tripNames: {type: String,required: true,max: 100},
    address: {type: String,required: true},
    riderId: {type: String,required: true},
    driverId: {type: String,required: true},
    trip_status: {type: String,required: true}
},
{ timestamps: true});
// Export Trip model
var Trip = module.exports = mongoose.model('Trips', TripSchema);
module.exports.get = function (callback, limit) {
    Trip.find(callback).limit(limit);
}
