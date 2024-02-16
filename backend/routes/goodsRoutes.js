const express = require("express");
const router = express.Router();
const { get, deleted, put, posted, getByType } = require('../controllers/goodsControllers');

router.get('/goods', get);
router.get('/goods/:goodtype', getByType); // Use router.get instead of router.getByType
router.post('/goods/post', posted);
router.delete('/goods/delete/:id', deleted);
router.put('/goods/put/:id', put);

module.exports = router;
