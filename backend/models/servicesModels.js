const connection = require("../database/index");

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `services` ';
    connection.query(sql, function(error, results, fields) {
      callback(error, results);
    });
  },

  getByServiceType: function(serviceType, callback) {
    const sql = 'SELECT * FROM `services` WHERE service_type = ?';
    connection.query(sql, [serviceType], function(error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  post: function(accData, callback) {
    const sql = 'INSERT INTO `services` SET ? ';
    connection.query(sql, accData, function(error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  deleteacc: function(id, callback) {
    const sql = 'DELETE FROM `services` WHERE `id` = ?';
    connection.query(sql, [id], function(error, results, fields) {
      callback(error, results);
    });
  },

  updateacc: function(id, updatedacc, callback) {
    const sql = 'UPDATE `services` SET ? WHERE id= ?';
    const values = [updatedacc, id];
    connection.query(sql, values, function(error, results, fields) {
      callback(error, results);
    });
  },

  getAllComments: function(serviceId, callback) {
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
