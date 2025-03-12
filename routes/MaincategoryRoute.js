const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/MaincategoryController")
const {maincategoryUploader}=require("../middleware/fileUploader")
const { verifyAdmin}=require("../middleware/authentication")
const MaincategoryRouter=require("express").Router()

MaincategoryRouter.post("",verifyAdmin,maincategoryUploader.single("pic") ,createRecord)






MaincategoryRouter.get("", getRecord)
MaincategoryRouter.get("/:_id",getSingleRecord)
MaincategoryRouter.put("/:_id",verifyAdmin,maincategoryUploader.single("pic") ,updateRecord)
MaincategoryRouter.delete("/:_id",verifyAdmin,deleteRecord)


module.exports=MaincategoryRouter