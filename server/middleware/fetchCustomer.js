const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const fetchCustomer = (req, res, next) => {
  const token = req.headers["x-access-token"];
  // console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "No token provided.",
    });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token.",
      });
    }
    // console.log(decoded);
    req.customer = decoded;
    next();
  });
};

module.exports = fetchCustomer;
