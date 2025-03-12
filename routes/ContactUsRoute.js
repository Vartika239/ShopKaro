const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/ContactUsController")
const {contactusUploader}=require("../middleware/fileUploader")
const { verifyAdmin}=require("../middleware/authentication")
const ContactUsRouter=require("express").Router()

ContactUsRouter.post("",createRecord)
ContactUsRouter.get("",verifyAdmin,getRecord)
ContactUsRouter.get("/:_id",verifyAdmin,getSingleRecord)
ContactUsRouter.put("/:_id",verifyAdmin,updateRecord)
ContactUsRouter.delete("/:_id",verifyAdmin,deleteRecord)


module.exports=ContactUsRouter