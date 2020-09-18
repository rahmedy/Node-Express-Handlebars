const orm = require('../config/orm.js');

const burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	addOne: (col, vals, cb) => {
		orm.insertOne('burgers',col, vals, (res) => {
			cb(res);
		});
	},

	updateOne: function(id_num, cb) {
		orm.updateOne("burgers", "devoured" , 1, "id", id_num, (res) =>  {
			cb(res);
		});
	}
};

// Export the burger module
module.exports = burger;
