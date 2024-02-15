
const express = require("express");
const router = express.Router();
const { getComments, postComment } = require('../controllers/commServicesControllers');

router.get('/services/:service_id/comments', getComments);
router.post('/services/:service_id/comments', postComment);

module.exports = router;
