const Driver = require("../models/drivers.model");

// Handle index actions
exports.index = function(req, res) {
  Driver.get(function(err, drivers) {
    if (err) {
      res.json({
        status: "error",
        message: err
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
exports.new = function(req, res) {
  var driver = new Driver({
    names: req.body.names,
    address: req.body.address,
    location: req.body.location,
    telephone: req.body.telephone,
    statusDriver: req.body.statusDriver
  });
  driver
    .save()
    .then(function(response) {
      res.status(201).json({ message: "success", driverInfo: response._doc });
    })
    .catch(function(err) {
      console.log(err);
    });
  //   save the driver and check for errors
};
// Handle view driver info
exports.view = function(req, res) {
  Driver.findById(req.params.driver_id, function(err, driver) {
    if (err) res.send(err);
    res.json({
      message: "Driver details loading..",
      data: driver
    });
  });
};
// Handle update driver info
exports.update = function(req, res) {
  Driver.findById(req.params.driver_id, function(err, driver) {
    if (err) res.send(err);
    (driver.names = req.body.names),
      (driver.address = req.body.address),
      (driver.location = req.body.location),
      (driver.telephone = req.body.telephone),
      (driver.statusDriver = req.body.statusDriver);
    // save the Driver and check for errors
    driver.save()
    .then(function(response) {
      res.status(201).json({ message: "success", driverInfo: response._doc });
    })
    .catch(function(err) {
      console.log(err);
    });
    
  });
};
// Handle delete Driver
exports.delete = function(req, res) {
  Driver.remove(
    {
      _id: req.params.driver_id
    },
    function(err, driver) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Driver deleted"
      });
    }
  );
};
