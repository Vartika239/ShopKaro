const mongoose=require("mongoose")

const WishlistSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"User Id is Mandatory"]

    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:[true,"Product Id is Mandatory"]

    }
})
  
const Wishlist=new mongoose.model("Wishlist",WishlistSchema)

module.exports=Wishlist