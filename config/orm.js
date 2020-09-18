const connection = require('../config/connection.js');

const orm = {
	// Send query to the database grabbing all burgers
	selectAll: (tableInput, cb) => {
		const query = "SELECT * FROM ??";
		return connection.query(query,[tableInput], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},

	// Insert new burger into the database
	insertOne: function(burger_name, cb) {
        const query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(query, [burger_name], function(err, result) {
            if(err) { 
                throw err;
            }
            cb(result);
        })
    },
	

	// Update burger in the database
	updateOne: (id, cb) => {
    const query = "UPDATE ?? SET devoured = ? WHERE id = ?";
    connection.query(query, [id], (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// Export the orm module
module.exports = orm;
