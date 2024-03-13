
const{Schema, default:mongoose}=require("mongoose")


const userInfo = new Schema({
    name:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true,
      
    },
        
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})
const userSchema=mongoose.model("SignupDetails", userInfo)
module.exports=userSchema