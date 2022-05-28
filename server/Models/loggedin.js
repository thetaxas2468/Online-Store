const mongoose=require("mongoose");

const loggedin = mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    loggedin:{
        type:Boolean,
        required:true,
        
    }
},{timestamps:true})
module.exports=mongoose.model("Login",loggedin)