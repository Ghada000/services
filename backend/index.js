const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors')
const goodsRouter = require('./routes/goodsRoutes')
app.use(cors())
app.use(express.json())






app.use('/api',goodsRouter)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });