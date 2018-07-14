const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

require('./db/db');

const port = 5665;


app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));


const carController = require('./controllers/carController');

app.use('/car', carController);


app.listen(port, () => {
	console.log(`Server is listening on ${port}.`);
})