const express = require("express");
const {login,register,logout}=require("../controllers/auth.controller")
const { updateProfile } = require('../controllers/auth.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post("/login",login)
router.post("/register",register)
router.put("/users/:id/update-profile", authMiddleware, updateProfile);
router.post("/logout",authMiddleware,logout)
module.exports=router;