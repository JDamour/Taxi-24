// RiderModel.js
var mongoose = require('mongoose');
// Setup schema
var RiderSchema = mongoose.Schema({
    ride_names: {type: String,required: true,max: 100},
    ride_address: {type: String,required: true},
    ride_location: {type: String,required: true}
},
{ timestamps: true});
// Export Rider model
var Rider = module.exports = mongoose.model('Riders', RiderSchema);
module.exports.get = function (callback, limit) {
    Rider.find(callback).limit(limit);
}
