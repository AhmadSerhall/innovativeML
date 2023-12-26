const User = require("../models/user.model");
const bcrypt =require("bcrypt");
const jwt=require("jsonwebtoken")



const login=async(req,res)=>{
    const{username,password}=req.body;
    
    const user= await User.findOne({username})
    console.log('User:', user);
    if(!user){ res.status(400).send({message:"username or password incorrect"})}
    // else{ res.status(200).send({message:`logged in, welcome ${username}`})}
  const isValidPassword = await bcrypt.compare(password, user.password);
if (!isValidPassword)
  res.status(400).send({ message: "Invalid username/password" });

const { password: hashedPassword, _id, ...userDetails } = user.toJSON();
// generate JWT token
const token = jwt.sign(
    {
      ...userDetails,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2 days" }
  );

  res.status(200).send({
    user: userDetails,
    token,
  });
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


    