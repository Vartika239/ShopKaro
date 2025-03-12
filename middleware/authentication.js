const jwt = require("jsonwebtoken");

function verifyAdmin(req, res, next) {
  let token = req.headers.authorization;
  console.log("I am here");
  if (token) {
    
    try {
      if (jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN)) next();
    } catch (error) {
      if (error.name === "TokenExpiredError")
        res.status(498).send({
          result: "Fail",
          reason: "Token expired.Please Login again to Access this API.",
        });
      else {
        res.status(401).send({
          result: "Fail",
          reason: "You are Not an Authorized Person to access this APII",
        });
      }
    }
  } else {
    res.status(401).send({
      result: "Fail",
      reason: "You are Not an Authorized Person to access this APII",
    });
  }
}

function verifyBoth(req, res, next) {
  let token = req.headers.authorization;

  if (token) {
    try {
      if (jwt.verify(token, process.env.JWT_SECRET_KEY_BUYER)) next();
    } catch (error) {
      try {
        if (jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN)) next();
      } catch (error) {
        if (error.name === "TokenExpiredError")
          res.status(498).send({
            result: "Fail",
            reason: "Token expired.Please Login again to Access this API.",
          });
        else {
          res.status(401).send({
            result: "Fail",
            reason: "You are Not an Authorized Person to access this APII",
          });
        }
      }
    }
  } else {
    res.status(401).send({
      result: "Fail",
      reason: "You are Not an Authorized Person to access this APII",
    });
  }
}

module.exports = {
  verifyAdmin: verifyAdmin,
  verifyBoth: verifyBoth,
};
