const { getAllComments,getCommentById, postComment: addComment } = require('../models/commServicesModels');

const getCommentsId = async function(req, res) {
    const { service_id } = req.params;
   await getCommentById(service_id, function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  };
  const getComments = async function(req, res) {
   
   await getAllComments( function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  const postComment = function(req, res) {
    const { service_id } = req.params;
    const { comment_text } = req.body;
    addComment(service_id, comment_text, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json(result);
      }
    });
  };
  
  module.exports = {
    getComments,
    postComment, 
    getCommentsId
  };
