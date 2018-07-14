const express = require('express');

const router = express.Router();

const Cars = require('../models/cars');


//INDEX ROUTE
router.get('/', (req, res) => {
	Cars.find({}, (err, allCars) => {
		if(err) {
			console.log(err, 'error with INDEX Route');
		} else {
			res.render('index.ejs', {
				cars: allCars
			})
		}
	})
})



//CREATE ROUTE
router.post('/', (req, res) => {
	Cars.create(req.body, (err, newCar) => {
		if(err) {
			console.log(err, 'error with CREATE Route');
		} else {
			console.log(newCar);
			res.redirect('/cars');
		}
	})
})







