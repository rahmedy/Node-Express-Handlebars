const connection = require("../config/connection.js")

const orm = { 
    // Send query to the database grabbing all burgers
  selectAll: (table, cb) => {
    const query = "SELECT * FROM " + table + ";"
    return connection.query(query,  (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  // Insert new burger into the database
  insertOne: (table, names, cb) => {
    const query = "INSERT INTO ?? (name) VALUES (?)"
    connection.query(query, [table, names], (err, result) => {
      if (err) throw err;
        cb(result);
    });
  },

  // Update burger in the database
  updateOne: (id, cb) => {
    const query = "UPDATE ?? SET ?? = (?) WHERE ?? = (?)"
    connection.query(query, [table, col, val, id_col, id_num], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm module
module.exports = orm;