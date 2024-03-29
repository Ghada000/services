// servicesRoutes.js
const express = require("express");
const router = express.Router();
const { get, deleted, put, posted, getByServiceType } = require('../controllers/servicesControllers');

router.get('/services', get);
router.get('/services/:service_type', getByServiceType); 
router.post('/services', posted);
router.delete('/services/:id', deleted);
router.put('/services/:id', put);


module.exports = router;
