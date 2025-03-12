const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Full Name is Mandatory"]
    },
    username:{
        type:String,
        unique:true,
        required:[true,"User Name is Mandatory"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email Address is Mandatory"]
    },
    phone:{
        type:String,
        required:[true,"User Phone is Mandatory"]
    },
    password:{
        type:String,
        required:[true,"User Password is Mandatory"]
    },
    role:{
        type:String,
        default:"Buyer"
    },
    address:{
        type:String,
        default:""
    },
    pin:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    otp:{
        type:String,
        default:"-44566"
    },
    pic:{
        type:String,
        default:""
    },
    active:{
        type:Boolean,
        default:true,
        
    },
})
  
const User=new mongoose.model("User",UserSchema)

module.exports=User