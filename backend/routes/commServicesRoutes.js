
const express = require("express");
const router = express.Router();
const { getComments, postComment } = require('../controllers/commServicesControllers');

router.get('/services/:service_id', getComments);
router.post('/services/:service_id', postComment);

module.exports = router;
