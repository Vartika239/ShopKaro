const { error } = require("console");
const ContactUs = require("../models/ContactUs");
const { options } = require("../routes");

async function createRecord(req, res) {
  try {
    let data = new ContactUs(req.body);
    await data.save();
 
    res.send({
      result: "Done",
      data: data,
      message:"Thanks For Sharing Your Query with Us.Our team Will Contact You Soon.."
    });
  } catch (error) {
    errorMessage = {};
    

    error.errors?.name ? errorMessage.name = error.errors.name.message : null,
    error.errors?.email ? errorMessage.email = error.errors.email.message : null,
    error.errors?.phone ? errorMessage.phone = error.errors.phone.message : null,
    error.errors?.subject ? errorMessage.subject = error.errors.subject.message : null,
    error.errors?.message ? errorMessage.message = error.errors.message.message : null
     
     
    if (Object.values(errorMessage).length === 0) {
      res.status(500).send({
        result: "Fail",
        reason: "Internal Server Error",
      });
    } else {
      res.status(400).send({
        result: "Fail",
        reason: errorMessage,
      });
    }
  }
}

async function getRecord(req, res) {
  try {
    let data = await ContactUs.find().sort({ _id: -1 })
  
    res.send({
      result: "Done",
      count: data.length,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      result: "Fail",
      reason: errorMessage,
    });
  }
}

async function getSingleRecord(req, res) {
  try {
    let data = await ContactUs.findOne({ _id: req.params._id })
   
    if (data) {
      res.send({
        result: "Done",
        data: data,
      });
    } else {
      res.status(404).send({
        result: "Fail",
        reason: "Record Not Found",
      });
    }
  } catch (error) {
    res.status(500).send({
      result: "Fail",
      reason: "Internal Server Error",
    });
  }
}

async function updateRecord(req, res) {
  try {
    let data = await ContactUs.findOne({ _id: req.params._id });
    if (data) {
      data.active = req.body.active ?? data.active;
     await data.save()
      res.send({
        result: "Done",
        data: data,
      });
    } else {
      res.status(404).send({
        result: "Fail",
        reason: "Record Not Found",
      });
    }
  } catch (error) {
    try {
      fs.unlinkSync(req.files.path);
    } catch (error) {}
    try {
      Array.from(req.files).forEach((x) => fs.unlinkSync(x.path));
    } catch (error) {}

    res.status(500).send({
      result: "Fail",
      reason: "Internal Server Error",
    });
  }
}




async function deleteRecord(req, res) {
  try {
    let data = await ContactUs.findOne({ _id: req.params._id });
    if (data  && data.active==="false") {
  
      await data.deleteOne();
      res.send({
        result: "Done",
        data: data,
      });
    } 
    else if(data?.active){
      res.status(404).send({
        result: "Fail",
        reason: "Unable to Delete Record.Query has not been Resolved",
      });
    }
    else {
      res.status(404).send({
        result: "Fail",
        reason: "Record Not Found",
      });
    }
  } catch (error) {
    res.status(500).send({
      result: "Fail",
      reason: "Internal Server Error",
    });
  }
}

module.exports = {
  createRecord: createRecord,
  getRecord: getRecord,
  getSingleRecord: getSingleRecord,
  updateRecord: updateRecord,
  deleteRecord: deleteRecord,
};
