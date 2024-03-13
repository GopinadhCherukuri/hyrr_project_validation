const jwt=require("jsonwebtoken")
const userSchema=require("../models/userSchema")

const checkUser = (req, res, next) => {
    const token = req.cookies1?.jwt;
    if (token) {
      jwt.verify(token, 'userSchema', async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await userSchema.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

module.exports=checkUser