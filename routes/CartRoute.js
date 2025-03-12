const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/CartController")
const {cartUploader}=require("../middleware/fileUploader")
const { verifyBoth}=require("../middleware/authentication")

const CartRouter=require("express").Router()

CartRouter.post("",verifyBoth,createRecord)
CartRouter.get("/:userid",verifyBoth,getRecord)
CartRouter.get("/single/:_id",verifyBoth,getSingleRecord)
CartRouter.put("/:_id",verifyBoth,updateRecord)
CartRouter.delete("/:_id",verifyBoth,deleteRecord)


module.exports=CartRouter