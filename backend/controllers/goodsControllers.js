const   {getAll,post,deleteacc,updateacc,getByGoodType} = require('../models/goodsModels')


const get = function(req, res) {
    getAll(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
        
    })
  } 
  
  const getByType = function (req, res) {
    const goodType = req.params.goodtype;
    console.log('Requested good type:', goodType);
  
    getByGoodType(goodType, function (err, results) {
      if (err) {
        console.error('Error fetching goods by good_type:', err);
        res.status(500).send(err);
      } else {
        console.log('Goods by Good Type:', results);
        res.json(results);
      }
    });
  };
      
  const posted=( function(req, res) {
  
    const accData = req.body; 
   
    post(accData, function(err, result) {
        if (err) res.status(500).send(err);
        else res.status(201).json(result);
    });
  })
  
  const put=( function(req, res) {
    const id = (req.params.id); 
    const updatedacc = req.body;
    updateacc(id, updatedacc, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  })
  
   const deleted=( function(req, res) {
    const id = (req.params.id);
    deleteacc(id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }); 
  module.exports={ get , getByType , put , posted , deleted }