const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
const goodsRouter = require('./routes/goodsRoutes')
const serviceRouter=require ('./routes/servicesRoutes')
const commentsRouter=require ('./routes/commServicesRoutes')

app.use(cors())
app.use(express.json())


app.use('/api',serviceRouter)
app.use('/api',goodsRouter)
app.use('/api',commentsRouter)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });