const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/cars_HW_GA');


mongoose.connection.on('connected', () => {
	console.log('mongoose is connected to mongoDB');
})

mongoose.connection.on('disconnected', () => {
	console.log('mongoose was disconnected from mongoDB');
})


mongoose.connection.on('error', () => {
	console.log(err, ' there was an error conencting to mongoDB');
})



