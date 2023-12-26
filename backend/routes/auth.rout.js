const express = require("express");
const {login,register,logout}=require("../controllers/auth.controller")
const { updateProfile } = require('../controllers/auth.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const passport=require ("passport");//importing passport to be used for google and facebook login actions
const router = express.Router();

router.post("/login",login)
router.post("/register",register)
router.put("/users/:id/update-profile", authMiddleware, updateProfile);
router.post("/logout",authMiddleware,logout)
router.get("auth/google",passport.authenticate('google',{scope:['profile','email']}))
router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/landing');//rediret them to landing page is authentication is successful 
  });
module.exports=router;