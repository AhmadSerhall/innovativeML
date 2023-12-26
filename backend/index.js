const express = require("express");//importing express after downloading the framework npm install express
const { connectToMongoDB } = require("./config/mongoDB");//imported the connectToMongoDB arrow function from the config folder
const app = express();//created an instance of express application
app.use(express.json());//these 2 lines add middleware this parse incoming json requests
app.use(express.urlencoded({ extended: true }));//parses incoming requests with URL-encoded payloads. 
require("dotenv").config();//we used the dotenv package we downloaded to use the url from the .env file

const passport =require("passport")
const session =require("express-session")
const configurePassport = require('./config/passport');
app.use(session({ secret: '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', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Configure Passport
// configurePassport(passport);

const authRoutes = require("./routes/auth.rout");
app.use("/auth", authRoutes);

// Start the server we should get a message displaying the PORT and the Function connectToMongoDB
app.listen(8000, () => {
    console.log("Server listening on PORT: ", 8000);
    connectToMongoDB(process.env.MONGODB_URL);
});
