const orm = require('../config/orm.js');

const burger = {
	all: (cb) => {
		orm.selectAll('burgers',cb)
	},

	create: (burger_name, cb) => {
		orm.insertOne(burger_name, cb)
	},

	update: (id, cb) => {
		orm.updateOne(id, res =>  {
			cb(res);
		});
	}
};

// Export the burger module
module.exports = burger;
