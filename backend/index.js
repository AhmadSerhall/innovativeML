const express = require("express");
const { connectToMongoDB } = require("./config/mongoDB");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

// Start the server
app.listen(8000, () => {
    console.log("Server listening on PORT: ", 8000);
    connectToMongoDB(process.env.MONGODB_URL); // Pass the MongoDB URL
});
