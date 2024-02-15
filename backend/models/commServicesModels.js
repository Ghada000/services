const connection = require("../database/index");

module.exports = {
  getAllComments: function( callback) {
    const sql = 'SELECT * FROM `comments`'
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },
  getCommentById: function(serviceId, callback) {
    const sql = 'SELECT * FROM comments WHERE service_id = ?';
    connection.query(sql, [serviceId], function(error, results) {
      callback(error, results);
    });
  },

  postComment: function(serviceId, commentText, callback) {
    const sql = 'INSERT INTO comments (service_id, comment_text) VALUES (?, ?)';
    connection.query(sql, [serviceId, commentText], function(error, result) {
      callback(error, result);
    });
  }
};
