const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
const serviceRouter=require ('./routes/servicesRoutes')
const goodRoutes = require('./routes/goodsRoutes')
app.use(cors())
app.use(express.json())




app.use('/api',serviceRouter)

app.use('/api',goodRoutes)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });