const User = require("../models/user.model");
const bcrypt =require("bcrypt");
const jwt=require("jsonwebtoken");

const admin = require("../config/firebaseAdminInit");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({ message: "Username or password incorrect" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).send({ message: "Invalid username/password" });
    }

    // Save the FCM token to the user document (if available in the request or from the client)
    const { fcmToken } = req.body;
    if (fcmToken) {
      user.fcmToken = fcmToken;
      await user.save();
    }

    // Generate JWT token
    const { password: hashedPassword, _id, ...userDetails } = user.toJSON();
    const token = jwt.sign(
      { ...userDetails },
      process.env.JWT_SECRET,
      { expiresIn: "2 days" }
    );

    res.status(200).send({
      user: userDetails,
      token,
      fcmToken: user.fcmToken,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ message: 'Internal server error during login.' });
  }
};


const register = async (req, res) => {
    const { first_name, last_name,email, username, password } = req.body;

    if (!first_name || !last_name || !email || !username || !password ) {
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
            email,
            username,
            password,
            
        });

        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Cannot create user" });
    }
};
const checkUsername = async (req, res) => {
  const { username } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    res.status(200).json({ message: 'Username available' });
  } catch (error) {
    console.error('Error checking username:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const updateProfile = async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, username,password } = req.body;
  
      // Validate that the user making the request is the owner of the profile
      if (req.user._id.toString() !== id) {
        return res.status(403).send({ message: 'Forbidden: You are not allowed to update this profile.' });
      }
  
      // Update the user profile
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { first_name, last_name, username,password },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).send({ message: 'User not found.' });
      }
  
      res.status(200).send({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).send({ message: 'Internal server error while updating profile.' });
    }
  };
 
  const logout = (req, res) => {
    try {
      res.status(200).send({ message: 'Logout successful' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).send({ message: 'Internal server error during logout.' });
    }
  };

module.exports = { login, register,checkUsername,updateProfile,logout };


    