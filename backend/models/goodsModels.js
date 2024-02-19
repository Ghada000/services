const connection=require("../database/index")

module.exports = {

    getAll :(callback) => {
        const sql = 'SELECT * FROM `goods` '
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
    })},
    getByGoodType: (goodType, callback) => {
      const sql = 'SELECT * FROM `goods` WHERE `good_type` = ?';
      connection.query(sql, [goodType], function (error, results, fields) {
        callback(error, results);
      });
    },
      post: function (accData, callback) {
      const sql = 'INSERT INTO `goods` SET ? ';
      connection.query(sql, accData, function (error, results, fields) {
        if (error) {
          callback(error, null); 
        } else {
          callback(null, results); 
        }
      });
    },
    
    deleteacc :function (id, callback){
      const sql='DELETE FROM `goods` WHERE `good_id` = ?';
      connection.query(sql,[id], function (error, results, fields) {
        callback(error, results);
    })}
    ,
     updateacc : function (id, updatedacc, callback) {
      console.log('Executing updateacc with ID:', id);
      const sql = 'UPDATE `goods` SET ? WHERE good_id= ?';
      const values = [updatedacc, id];
      connection.query(sql, values, function (error, results, fields) {
        callback(error, results);
      })} 
}