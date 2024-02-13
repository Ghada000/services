const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
const goodsRouter = require('./routes/goodsRoutes')
const serviceRouter=require ('./routes/servicesRoutes')
app.use(cors())
app.use(express.json())




app.use('/api',serviceRouter)

app.use('/api',goodsRouter)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });