const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json())



console.log("hello");





app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });