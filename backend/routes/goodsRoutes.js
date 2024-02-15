// routes/goodsRoutes.js

const express = require("express");
const router = express.Router();
const { get, deleted, put, posted, getByType } = require('../controllers/goodsControllers');

router.get('/goods', get);
router.get('/goods/:goodType', getByType);
router.post('/goods/post', posted);
router.delete('/goods/delete/:id', deleted);
router.put('/goods/update/:id', put);

module.exports = router;
