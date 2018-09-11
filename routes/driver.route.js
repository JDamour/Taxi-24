const express = require('express');
const router = express.Router();

// Require the controllers for Drivers
const driver_controller = require('../controllers/driver.controller');


router.post('/create', driver_controller.driver_create);
module.exports = router;