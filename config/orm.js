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
    const query = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(query, [true, id], (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	console.log('====', query)
	}
};

// Export the orm module
module.exports = orm;


// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;