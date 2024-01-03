const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    res.status(403).send("Forbidden");
  } else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ username: decoded.username }).select(
      "-password"
    );
    req.user = user;
    next();
  }
};
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.user_type === 'admin') {
    next(); 
  } else {
    res.status(403).json({ message: 'Forbidden: Admin access required' });
  }
};
//make admin middleware file inside the middleware
module.exports = {
  authMiddleware,adminMiddleware
};
