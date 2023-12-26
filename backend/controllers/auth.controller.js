const User = require("../models/user.model");
const bcrypt =require("bcrypt");
const login=(req,res)=>{

}

const register = async (req, res) => {
    const { first_name, last_name, username, password, user_type } = req.body;

    if (!first_name || !last_name || !username || !password || !user_type) {
        return res.status(400).send({ message: "Error, all fields are required" });
    }

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).send({ message: "Username already exists" });
        }

        
        const user = await User.create({
            first_name,
            last_name,
            username,
            password,
            user_type
        });

        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Cannot create user" });
    }
};

module.exports = { login, register };


    