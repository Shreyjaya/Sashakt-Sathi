const mongoose=require("mongoose")
const passportLocalMongoose= require('passport-local-mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    username: {
        type: String, // Added username field
        required: true,
      },
    role:{
        type:String,
        required:true
    }
    
    })

userSchema.plugin(passportLocalMongoose)  //plugin schema pe lgta h
 

let User=mongoose.model('User',userSchema)
module.exports=User;