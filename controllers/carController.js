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


//NEW ROUTE
router.get('/new', (req, res) => {
	res.render('new.ejs');
})



//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
	Cars.findById(req.params.id, (err, foundCar) => {
		if(err) {
			console.log(err, 'error with EDIT Route');
		} else {
			res.render('edit.ejs', {
				car: foundCar
			})
		}
	})
})



//PUT ROUTE
router.post('/:id', (req, res) => {
	Cars.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCar) => {
		if(err) {
			console.log(err, 'error with PUT Route');
		} else {
			console.log(updatedCar);
			res.redirect('/cars');
		}
	})
})



//SHOW ROUTE
router.get('/:id', (req, res) => {
	Cars.findById(req.params.id, (err, foundCar) => {
		if(err) {
			console.log(err, 'error with SHOW Route');
		} else {
			res.render('show.ejs', {
				car: foundCar
			})
		}
	})
})



//DELETE ROUTE 
router.delete('/:id', (req, res) => {
	Cars.findByIdAndRemove(req.params.id, (err, deletedCar) => {
		if(err) {
			console.log(err, 'error with DELETE Route');
		} else {
			console.log(deletedCar);
			res.redirect('/cars');
		}
	})
})



module.exports = router;



