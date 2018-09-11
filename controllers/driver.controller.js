const Driver = require('../models/drivers.model');

// Handle index actions
exports.index = function (req, res) {
    Driver.get(function (err, drivers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Drivers retrieved successfully",
            data: drivers
        });
    });
};
// Handle create Driver actions
exports.new = function (req, res) {
    var driver = new Driver();
        driver.names = req.body.names,
        driver.address = req.body.address,
        driver.location = req.body.location,
        driver.telephone = req.body.telephone,
        driver.status = req.body.status
// save the driver and check for errors
    driver.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New Driver created!',
            data: driver
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Driver.findById(req.params.driver_id, function (err, driver) {
        if (err)
            res.send(err);
        res.json({
            message: 'Driver details loading..',
            data: driver
        });
    });
};
// Handle update driver info
exports.update = function (req, res) {
    Driver.findById(req.params.driver_id, function (err, driver) {
        if (err)
            res.send(err);
        driver.names = req.body.names,
            driver.address = req.body.address,
            driver.location = req.body.location,
            driver.telephone = req.body.telephone,
            driver.status = req.body.status
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Driver Info updated',
                data: driver
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Driver.remove({
        _id: req.params.driver_id
    }, function (err, driver) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Driver deleted'
        });
    });
};