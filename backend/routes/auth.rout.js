const express=require("expres");
const {login,register}=require("../controllers/auth.controller")
const router=express.router

router.post("/login",login)
router.post("/register",register)
module.exports=router;