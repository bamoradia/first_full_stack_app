const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
	make: {type: String, required: true},
	model: String,
	color: String,
	year: Number,
	miles: Number
})




module.exports = mongoose.model('Car', carSchema);


