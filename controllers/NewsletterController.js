const { error } = require("console");
const Newsletter = require("../models/Newsletter");
const { options } = require("../routes");

async function createRecord(req, res) {
  try {
    let data = new Newsletter(req.body);
    await data.save();
 
    res.send({
      result: "Done",
      data: data,
      message:"Thanks For Subscribing Our Newsletter Service"
    });
  } catch (error) {
    errorMessage = {};
    error.keyValue?.email ? errorMessage.email = "Your Email Address is Already Registered" : null,
    error.errors?.email ? errorMessage.email = error.errors.email.message : null
     
     
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
    let data = await Newsletter.find().sort({ _id: -1 })
  
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
    let data = await Newsletter.findOne({ _id: req.params._id })
   
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
    let data = await Newsletter.findOne({ _id: req.params._id });
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
    let data = await Newsletter.findOne({ _id: req.params._id });
    if (data) {
  
      await data.deleteOne();
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

module.exports = {
  createRecord: createRecord,
  getRecord: getRecord,
  getSingleRecord: getSingleRecord,
  updateRecord: updateRecord,
  deleteRecord: deleteRecord,
};
