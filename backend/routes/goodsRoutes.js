const express = require("express");
const router = express.Router();
const { get, deleted, put, posted, getByType } = require('../controllers/goodsControllers');

router.get('/goods', get);
router.get('/goods/:goodtype', getByType); // Use router.get instead of router.getByType
router.post('/goods', posted);
router.delete('/goods/:id',deleted)
router.put('/goods/:id', put);
module.exports = router;
