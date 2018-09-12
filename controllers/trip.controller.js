const Trip = require("../models/trip.model");

// Handle index actions
exports.index = function(req, res) {
    Trip.get(function(err, trips) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Trips retrieved successfully",
      data: trips
    });
  });
};
// Handle create Trip actions
exports.new = function(req, res) {
  var trip = new Trip({
    tripNames: req.body.tripNames,
    address: req.body.address,
    riderId: req.body.riderId,
    driverId: req.body.driverId,
    trip_status: req.body.trip_status
  });
  trip
    .save()
    .then(function(response) {
      res.status(201).json({ message: "success", tripInfo: response._doc });
    })
    .catch(function(err) {
      console.log(err);
    });
  //   save the trip and check for errors
};
// Handle view trip info
exports.view = function(req, res) {
  Trip.findById(req.params.trip_id, function(err, trip) {
    if (err) res.send(err);
    res.json({
      message: "Trip details loading..",
      data: trip
    });
  });
};
// Handle update trip info
exports.update = function(req, res) {
  Trip.findById(req.params.trip_id, function(err, trip) {
    if (err) res.send(err);
    (trip.tripNames = req.body.tripNames),
      (trip.address = req.body.address),
      (trip.riderId = req.body.riderId),
      (trip.driverId = req.body.driverId),
      (trip.trip_status = req.body.trip_status);
    // save the Trip and check for errors
    trip.save()
    .then(function(response) {
      res.status(201).json({ message: "success", tripInfo: response._doc });
    })
    .catch(function(err) {
      console.log(err);
    });
    
  });
};
// Handle delete trip
exports.delete = function(req, res) {
  Trip.remove(
    {
      _id: req.params.trip_id
    },
    function(err, trip) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "trip deleted"
      });
    }
  );
};
