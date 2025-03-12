const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord, login, forgotPassword1, forgotPassword2, forgotPassword3 } = require("../controllers/UserController")
const {userUploader}=require("../middleware/fileUploader")
const { verifyAdmin, verifyBoth}=require("../middleware/authentication")

const UserRouter=require("express").Router()

UserRouter.post("" ,createRecord)
UserRouter.get("",verifyAdmin, getRecord)
UserRouter.get("/:_id",verifyBoth, getSingleRecord)
UserRouter.put("/:_id",verifyBoth,userUploader.single("pic") ,updateRecord)
UserRouter.delete("/:_id",verifyAdmin,deleteRecord)
UserRouter.post("/login" ,login)
UserRouter.post("/forgot-password1" ,forgotPassword1)
UserRouter.post("/forgot-password2" ,forgotPassword2)
UserRouter.post("/forgot-password3" ,forgotPassword3)



module.exports=UserRouter