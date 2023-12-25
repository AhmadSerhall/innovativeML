const mongoose = require("mongoose");//using the mongoose after downloading it npm install mongoose@latest

const connectToMongoDB = () => {
    mongoose.connect(process.env.MONGODB_URL);//connected to the URL using .env file after downloading the dotenv packet npm install dotenv
  const connection = mongoose.connection;

  connection.on("error", (error) => {
    console.log("Error connecting to MongoDB: ", error); //if error we print the error in the console
  });

  connection.once("open", () => {
    console.log("Connected to MongoDB...");//else we get a success connection message
  });
};

module.exports = { connectToMongoDB };//export the arrow function connectTOMongoDB to use it again somewhere else