const express = require('express');
const router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to TAXI 24 API Application for Trips',
    });
});
// Import Driver controller
var tripController = require('../controllers/trip.controller');
// Drivers routes
router.route('/trips')
    .get(tripController.index)
    .post(tripController.new);
router.route('/trips/:trip_id')
    .get(tripController.view)
    .patch(tripController.update)
    .put(tripController.update)
    .delete(tripController.delete);
// Export API routes
module.exports = router;