const Rider = require("../models/rider.model");

// Handle index actions
exports.index = function(req, res) {
  Rider.get(function(err, riders) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Riders retrieved successfully",
      data: riders
    });
  });
};
// Handle create Rider actions
exports.new = function(req, res) {
  var rider = new Rider({
    ride_names: req.body.ride_names,
    ride_address: req.body.ride_address,
    ride_location: req.body.ride_location
  });
  rider
    .save()
    .then(function(response) {
      res.status(201).json({ message: "success", riderInfo: response._doc });
    })
    .catch(function(err) {
      console.log(err);
    });
  //   save the Rider and check for errors
};
// Handle view Rider info
exports.view = function(req, res) {
  Rider.findById(req.params.rider_id, function(err, rider) {
    if (err) res.send(err);
    res.json({
      message: "Rider details loading..",
      data: rider
    });
  });
};
// Handle update Rider info
exports.update = function(req, res) {
  Rider.findById(req.params.rider_id, function(err, rider) {
    if (err) res.send(err);
    (rider.ride_names = req.body.ride_names),
      (rider.ride_address = req.body.ride_address),
      (rider.ride_location = req.body.ride_location)
    // save the Rider and check for errors
    rider.save()
    .then(function(response) {
      res.status(201).json({ message: "success", riderInfo: response._doc });
    })
    .catch(function(err) {
      console.log(err);
    });
    
  });
};
// Handle delete Rider
exports.delete = function(req, res) {
  Rider.remove(
    {
      _id: req.params.rider_id
    },
    function(err, Rider) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Rider deleted"
      });
    }
  );
};
