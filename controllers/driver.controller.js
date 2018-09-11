const Driver = require('../models/drivers.model');

// controllers/products.js
exports.driver_create = function (req, res,next) {
    let driver = new Driver(
        {
            names: req.body.names,
            address: req.body.address,
            location: req.body.location,
            telephone: req.body.telephone,
            status: req.body.status
        }
    );

    driver.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Driver Created successfully')
    })
};