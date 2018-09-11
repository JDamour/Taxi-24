// DriverModel.js
var mongoose = require('mongoose');
// Setup schema
var DriverSchema = mongoose.Schema({
    names: {
        type: String,
        required: true,
        max: 100
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Driver model
var Driver = module.exports = mongoose.model('Drivers', DriverSchema);
module.exports.get = function (callback, limit) {
    Driver.find(callback).limit(limit);
}
