const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name is Mandatory"]
    },
    description:{
        type:String,
        default:""
    },
    maincategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Maincategory",
        required:[true,"Product Maincategory Id is Mandatory"]

    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subcategory",
        required:[true,"Product Subcategory Id is Mandatory"]

    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        required:[true,"Product Brand Id is Mandatory"]

    },
    color:{
        type:String,
        required:[true,"Product Color is Mandatory"]
    },
    size:{
        type:Number,
        required:[true,"Product Size is Mandatory"]
    },
    basePrice:{
        type:Number,
        required:[true,"Product BasePrice is Mandatory"]
    },
    discount:{
        type:Number,
        required:[true,"Product Discount is Mandatory"]
    },
    finalPrice:{
        type:Number,
        required:[true,"Product FinalPrice is Mandatory"]
    },
    stock:{
        type:Boolean,
        default:true
    },
    stockQuantity:{
        type:Number,
        required:[true,"Product StockQuantity is Mandatory"]
    },
    pic:[
    {
        type:String,
    }
],
   
    active:{
        type:Boolean,
        default:true,
        
    },
})
  
const Product=new mongoose.model("Product",ProductSchema)

module.exports=Product