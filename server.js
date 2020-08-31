// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const myApp = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
myApp.use(bodyParser.urlencoded({ extended: false }));
myApp.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
myApp.use(cors());

// Initialize the main project folder
myApp.use(express.static('website'));

// Setup Server
const port = 3000;
const server = myApp.listen(port, serverCheck);

function serverCheck()
{
	console.log(`Server is running on port: ${port}`);
}

// GET Route
myApp.get('/getDataFromServer', (request, response) => {
	response.send(projectData);
});

// POST Route
myApp.post('/addDataToServer', (request, response) => {
	console.log(request.body);
	projectData['date'] = request.body.date;
	projectData['temp'] = request.body.temperature;
	projectData['feelings'] = request.body.userResponse;
	console.log(projectData);
});