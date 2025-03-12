const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/NewsletterController")
const {newsletterUploader}=require("../middleware/fileUploader")
const { verifyAdmin}=require("../middleware/authentication")

const NewsletterRouter=require("express").Router()

NewsletterRouter.post("",createRecord)
NewsletterRouter.get("",verifyAdmin,getRecord)
NewsletterRouter.get("/:_id",verifyAdmin,getSingleRecord)
NewsletterRouter.put("/:_id",verifyAdmin,updateRecord)
NewsletterRouter.delete("/:_id",verifyAdmin,deleteRecord)


module.exports=NewsletterRouter