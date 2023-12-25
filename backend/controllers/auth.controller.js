const User = require("../models/user.model");

const login=(req,res)=>{

}

const register=async(req,res)=>{
    const {first_name,last_name,username,password,created_at,user_type}=req.body;
    if(!first_name || !last_name || !username || !password || !user_type){
        res.status(400).send({message:"error, all fields are required"})
    }
    try{
        const user=await User.create(
            first_name,
            last_name,
            username,
            password,
            created_at,
            user_type
        )
        res.status(200).send({message:"user created successfully"})
    }
    catch{
        res.status(500).send({message:"cannot create user"})
    }
    }

    module.exports={login,register}
    