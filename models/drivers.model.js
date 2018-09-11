const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DriverSchema = new Schema({
    names: {type: String, required: true, max: 100},
    address: {type: String, required: true},
    location: {type: String, required: true},
    telephone: {type: String, required: true},
    status: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Drivers', DriverSchema);