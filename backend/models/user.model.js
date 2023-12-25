const mongoose=require("mongoose");
const bcrypt=require("bcrypt");//npm install bcrypt
const userShema=new mongoose.Schema({
    first_name:{
        type:String,
        required:"enter your first name",
        minlength:3,
        trim:true
    },
    last_name:{
        type:String,
        required:"enter your last name",
        minlength:3,
        trim:true
    },
    username:{
        type:String,
        required:"username needed",
        unique:true,
        minlength:3,
        trim:true
    },
    password:{
        type:String,
        required:"password is needed",
        minlength:3,
        trim:true
    },
    created_at: {
        type: Date,
        default: Date.now 
    },
    user_type:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
}
)
userShema.pre("save",async function(next){
    try{
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
    next();
    }catch(error){
        next(error);
    }
})

const User=mongoose.model("User",userShema)
module.exports=User;
    
