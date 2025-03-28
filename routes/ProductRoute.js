const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/ProductController")
const {productUploader}=require("../middleware/fileUploader")
const { verifyAdmin, verifyBoth}=require("../middleware/authentication")
const ProductRouter=require("express").Router()

ProductRouter.post("",verifyAdmin,productUploader.array("pic") ,createRecord)
ProductRouter.get("",getRecord)
ProductRouter.get("/:_id",getSingleRecord)
ProductRouter.put("/:_id",verifyBoth,productUploader.array("pic") ,updateRecord)
ProductRouter.delete("/:_id",verifyAdmin,deleteRecord)


module.exports=ProductRouter