const passport = require("passport");
const mongoose = require("mongoose");
const Users = mongoose.model('Users')

exports.register = (req,res,next) =>{
    const {username,password} = req.body;
    console.log(username,password)
    if(!username) {
       return res.status(422).json({
         errors: {
           email: 'is required',
         },
       });
     }
   if(!password) {
     return res.status(422).json({
       errors: {
         password: 'is required',
       },
     });
   }
   const user = {username : username,password : password};
   const finalUser = new Users(user);
   console.log(finalUser)
   finalUser.setPassword(user.password);
   return finalUser.save()
     .then(() =>{
     console.log("Success !")
     res.json({user: finalUser.toAuthJSON()})
     })
     .catch(() => {
       console.log("Failure :(");
     });
}
exports.Login = (req,res,next) => {
    // res.send("LOGIN");
    const {username,password} = req.body;

    if(!username) {
        return res.status(422).json({
          errors: {
            email: 'is required',
          },
        });
      }
    if(!password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if(err) {
        return next(err);
      }
  
      if(passportUser) {
        const user = passportUser;

        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }
  
      return res.status(400).json({
          errors : "error"
      })
    })(req, res, next);
}
exports.Signup = (req,res,next) => {
    // res.send("SIGN UP");
}
exports.Logout = (req,res,next) => {
  console.log(next);
  res.json({
    logout : true,
  })
  
  
    
}
exports.ChangePassword = (req,res,next) =>{
    // res.send("CHANGE PASSWORD");
}
exports.ForgotPassword = (req,res,next) =>{
    // res.send("FORGOT PASSWORD");
}
