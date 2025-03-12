const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/SubcategoryController")
const {subcategoryUploader}=require("../middleware/fileUploader")
const { verifyAdmin}=require("../middleware/authentication")
const SubcategoryRouter=require("express").Router()

SubcategoryRouter.post("",verifyAdmin,subcategoryUploader.single("pic") ,createRecord)
SubcategoryRouter.get("",getRecord)
SubcategoryRouter.get("/:_id",getSingleRecord)
SubcategoryRouter.put("/:_id",verifyAdmin,subcategoryUploader.single("pic") ,updateRecord)
SubcategoryRouter.delete("/:_id",verifyAdmin,deleteRecord)


module.exports=SubcategoryRouter