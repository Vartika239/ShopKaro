const { createRecord, getRecord, getSingleRecord,deleteRecord } = require("../controllers/WishlistController")
const {wishlistUploader}=require("../middleware/fileUploader")
const { verifyBoth}=require("../middleware/authentication")
const WishlistRouter=require("express").Router()

WishlistRouter.post("",verifyBoth,createRecord)
WishlistRouter.get("/:userid",verifyBoth,getRecord)
WishlistRouter.get("/single/:_id",verifyBoth,getSingleRecord)
WishlistRouter.delete("/:_id",verifyBoth,deleteRecord)


module.exports=WishlistRouter