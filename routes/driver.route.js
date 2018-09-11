const express = require('express');
const router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to TAXI 24 API Application for Drivers',
    });
});
// Import Driver controller
var driverController = require('../controllers/driver.controller');
// Contact routes
router.route('/drivers')
    .get(driverController.index)
    .post(driverController.new);
router.route('/drivers/:driver_id')
    .get(driverController.view)
    .patch(driverController.update)
    .put(driverController.update)
    .delete(driverController.delete);
// Export API routes
module.exports = router;