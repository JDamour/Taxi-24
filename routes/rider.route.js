const express = require('express');
const router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to TAXI 24 API Application for Riders',
    });
});
// Import Rider controller
var riderController = require('../controllers/rider.controller');
// Riders routes
router.route('/riders')
    .get(riderController.index)
    .post(riderController.new);
router.route('/riders/:rider_id')
    .get(riderController.view)
    .patch(riderController.update)
    .put(riderController.update)
    .delete(riderController.delete);
// Export API routes
module.exports = router;