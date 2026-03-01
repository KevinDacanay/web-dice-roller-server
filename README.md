# Web Dice Roller - Server

## Author
Kevin Dacanay

## Description
This is the server-side component for the Web Dice Roller application. It is a simple Node.js and Express API that provides endpoints for rolling dice and is designed to be consumed by the Web Dice Roller client.

## Credits
All work for this project is original. It was built using Node.js and Express to provide a RESTful API.

## Instructions for Compiling and Executing

### Running Locally
This application is a Node.js server.

1. Clone or download the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies (Express, CORS).
4. Run `node server.js` to start the server.
5. The API will be available at `http://localhost:3000`.

### Deployment
This project is configured for continuous deployment using Azure App Service.

1. Changes pushed to the main branch of the GitHub repository automatically trigger a GitHub Actions workflow.
2. The workflow deploys the latest version of the server to the Azure App Service instance.

Visit the site @ https://web-dice-roller-server-g3g9e4e5fecyehh3.canadacentral-01.azurewebsites.net/