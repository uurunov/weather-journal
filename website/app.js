/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const keyAPI= '&appid=a7676115f0cff66c4c21188403d28750&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (1+d.getMonth())+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getResults);

/* Function called by event listener by GENERATE*/
function getResults(e) {
	const userZipCode = document.getElementById('zip').value;
	if(!userZipCode) {
		console.log(alert("Enter zip code, please!"));
	}
	getDataAPI(baseURL, userZipCode, keyAPI).then(function(data) {
		const userRes = document.getElementById('feelings').value;
		postDataAPI('/addDataToServer', {temperature: data.main.temp, date: newDate, userResponse: userRes}).then(updateUI())
	});
}

/* Function to GET Web API Data*/
const getDataAPI = async function (baseURL, ZipCode, keyAPI) {
	const apiData = await fetch(baseURL+ZipCode+keyAPI);
	try {
		const response = await apiData.json();
		console.log('API data is received from OpenWeatherMap');
		return response;
	}
	catch(error) {
		console.log("Error has occurred:");
		console.log(error);
	}
}

/* Function to POST data */
const postDataAPI = async function(url = '', dataObject = {}) {
	const res = await fetch(url, {
		method: "POST", credentials: "same-origin", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(dataObject)
	});
	try {
		const data = await res.json();
		console.log(data);
		return data;
	}
	catch (error) {
		console.log("Error has occurred:");
		console.log(error);
	}
};

/* Function to GET Project Data */
const updateUI = async function() {
	const request = await fetch('/getDataFromServer');
	try {
		const data = await request.json();
		console.log(data);
		document.getElementById('date').innerHTML = data.date;
		document.getElementById('temp').innerHTML = data.temp;
		document.getElementById('content').innerHTML = data.feelings;
	}
	catch(error) {
		console.log("Error has occurred:");
		console.log(error);
	}
}