const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
	burger.all((data) => {
		let hbsObj = {
			burger: data
		};
		res.render('index', hbsObj);
	})
});

router.post('/api/burgers', (req, res) => {
	burger.create(req.body.burger_name, (result) => {
		res.json({ id: result.insertId });
	});

});

router.put('/api/burgers/:id', (req, res) => {
	burger.update( req.params.id , (result) => {
		res.json({ id: result.insertId });
	});

});

module.exports = router;
