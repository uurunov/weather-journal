# Weather-Journal App Project

## Overview
- This project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Specifications

### Project Environment Setup
- Node and Express are installed on the local machine. 
- The project file `server.js` requires `express()`, and creates an instance of the app using Express.
- The Express app instance is pointed to the project folder with .html, .css, and .js files.
- `body-parser` and `cors` packages are installed and included in the project from the command line.
- Local server runs and produces feedback to the Command Line through a working callback function.
- API credentials are created on OpenWeatherMap.com and stored in the `website/app.js` file.

### APIs and Routes
- A JavaScript Object named `projectData` initiated in the file `server.js` to act as the app API endpoint.
- The personal API Key for OpenWeatherMap API is saved in a named const variable and passed as a parameter to `fetch()`.
- Data is successfully returned from the external API.
- GET route is setup on the server side to return the JS object created at the top of server code.
- Asynchronous function is setup to fetch the data from the app endpoint.
- POST route is setup on the server side to add an entry to the project endpoint and execute on the client side as an asynchronous function.

### Dynamic UI
- The input element with the placeholder `enter zip code here` has an id of zip.
- The textarea element has an id `feelings`.
- The button element has an id `generate`.
- The div with the id `entryHolder` has three child divs with the ids: date, temp, content
- An event listener is added to the button from DOM using Vanilla JS.
- `innerHTML` properties of existing DOM elements are set dynamically based on the data returned by the app route in the `async` function.
- The data returned by the app route are in the following order: date, temperature, and user response

## Contact Details
- Email: ulugbekurunov1997@gmail.com
- LinkedIn: https://linkedin.com/in/uurunov
