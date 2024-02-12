const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controllers/servicesControllers')



  router.get('/service',get)
  router.post('/service',posted)
  router.delete('/service/:id',deleted)
  router.put('/service/:id',put)

  module.exports=router