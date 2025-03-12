const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord, getUserRecord, order, verifyOrder } = require("../controllers/CheckoutController")
const {checkoutUploader}=require("../middleware/fileUploader")
const { verifyAdmin,verifyBoth}=require("../middleware/authentication")
const CheckoutRouter=require("express").Router()

CheckoutRouter.post("",verifyBoth,createRecord)
CheckoutRouter.get("",verifyAdmin,getRecord)
CheckoutRouter.get("/user/:userid",verifyBoth,getUserRecord)
CheckoutRouter.get("/single/:_id",verifyBoth,getSingleRecord)
CheckoutRouter.put("/:_id",verifyBoth,updateRecord)
CheckoutRouter.delete("/:_id",verifyAdmin,deleteRecord)
CheckoutRouter.post("/order",verifyBoth,order)
CheckoutRouter.post("/verify",verifyBoth,verifyOrder)


module.exports=CheckoutRouter