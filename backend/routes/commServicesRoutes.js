
const express = require("express");
const router = express.Router();
const { getComments, postComment ,getCommentsId} = require('../controllers/commServicesControllers');

router.get('/comments/:service_id', getCommentsId);
router.get('/comments' ,getComments)
router.post('/comments/:service_id', postComment);
module.exports = router;
