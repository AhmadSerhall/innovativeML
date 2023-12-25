const express = require("express");//importing express after downloading the framework npm install express
const { connectToMongoDB } = require("./config/mongoDB");//imported the connectToMongoDB arrow function from the config folder
const app = express();//created an instance of express application
app.use(express.json());//these 2 lines add middleware this parse incoming json requests
app.use(express.urlencoded({ extended: true }));//parses incoming requests with URL-encoded payloads. 
require("dotenv").config();//we used the dotenv package we downloaded to use the url from the .env file

// Start the server we should get a message displaying the PORT and the Function connectToMongoDB
app.listen(8000, () => {
    console.log("Server listening on PORT: ", 8000);
    connectToMongoDB(process.env.MONGODB_URL);
});
