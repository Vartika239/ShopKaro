const mongoose=require("mongoose")

const CartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"User Id is Mandatory"]

    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:[true,"Product Id is Mandatory"]

    },
    qty:{
        type:Number,
        required:[true,"Quantity is Mandatory"]
    },
    total:{
        type:Number,
        required:[true,"Price is Mandatory"]
    }
})
  
const Cart=new mongoose.model("Cart",CartSchema)

module.exports=Cart